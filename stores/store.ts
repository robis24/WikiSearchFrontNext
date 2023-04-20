import { defineStore } from 'pinia';
import moment from 'moment';
import { State, Config, WikiSearchApiResults, filterOption, IFilterOptions } from './types';

import mw from './mock';

const api = new mw.Api();
const config: Config = mw.config.values.WikiSearchFront.config

export const useStore = defineStore('store', {
  state: () => (
    {
      hits: [],
      total: 0,
      term: '',
      size: config.settings.size || 10,
      from: 0,
      order: 'desc',
      sort: 'score',
      selected: [],
      config,
      filtersOpen: true,
      aggregations: {}
    } as State
  ),
  actions: {
    async fetchResult() {

      const orLogicFilters: IFilterOptions = {}
      const transformedSelection: filterOption[] = []
      
      this.selected.forEach((option) => {
        const {key, value} = option;
        const selected = {key, value};
        const settings = this.config.facetSettings[key] || {};
        const aggs = this.aggregations?.[key]?.[value] || {}

        if (settings.not) { selected.negate = true };

        // preperquery for value
        if (option.type === 'query') { selected.type = 'query' };

        // query option

        // date logic?

        if (option.type === 'range' || aggs.type === 'range') {

          selected.range = {
            gte: option.from || aggs.from,
            lte: option.to || aggs.to
          }
        }

        if (settings.logic === 'or') { 
          orLogicFilters[key] = {...selected, value: [...orLogicFilters[key]?.value || [], value]};
          return
        };

        transformedSelection.push(selected)
      })

      const ranges = []
      const dateFormat = 'YYYY-MM-DD';

      const createDate = (date: string) => {
        return moment(date, dateFormat) / 86400000 + 2440587.5, 10;
      }

      Object.entries(this.config.facetSettings).forEach(([key, setting]) => {
        if (setting.display === 'date') {

          const to = createDate(moment().format(dateFormat));

          const dateRanges = [
            { key: 'Last Week', from: createDate(moment().subtract(7, 'days').format(dateFormat)), to },
            { key: 'Last Month', from: createDate(moment().subtract(1, 'months').format(dateFormat)), to },
            { key: 'Last Quarter', from: createDate(moment().subtract(1, 'quarter').format(dateFormat)), to }
          ];
          const max = setting.max || 5;

          for (let i = 0; i < max; i += 1) {
            const year = moment().subtract(i, 'years').format('YYYY');
            dateRanges.push({ key: year.toString(), from: createDate(`${year}-01-01`), to: createDate(`${year + 1}-01-01`) });
          }

          ranges.push({
            type: 'range',
            ranges: dateRanges,
            property: key
          })
        }

        if (setting.display === 'range') {
          
        }
      })

      const params = {
        action: 'query',
        meta: 'WikiSearch',
        format: 'json',
        filter: JSON.stringify([...transformedSelection, ...Object.values(orLogicFilters)]),
        //term: prepareQuery(this.term),
        from: this.from,
        limit: this.size,
        // pageid: mediaWikiValues.wgArticleId,
        aggregations: JSON.stringify(ranges),
      };

      const response: WikiSearchApiResults = await api.post(params);
      console.log(params)
      this.setResult(response);

    },
    getStateFromUrlParams() {
      const paramOptions = {
        filters: (val: string) => {
          this.selected = val.split('~~').map((option) => {
            const [key, value] = option.split('^^');
            const [filterType, optionKey, optionValue] = key.split('_');

            const filter: filterOption = {
              key: optionKey || key,
              value: optionValue || value
            }

            if (filterType === 'range') {
              const [ from, to ] = value.split('_');
              filter.from = from;
              filter.to = to;
              filter.label = `${from} - ${to}`;
              filter.type = 'range';
            }

            if (filterType === 'query') {
              // preperquery for value
              filter.type = 'query'
            }
            return filter
          });
        },
        term: (val: string) => {
          this.term = val;
        },
        offset: (val: string) => {
          this.from = parseInt(val, 10);
        },
        sort: (val: string) => {
          this.sort = val;
        },
        order: (val: string) => {
          this.order = val;
        },
        default: () => null
      }

      const urlParams = new URLSearchParams(window.location.search);

      Object.entries(Object.fromEntries(urlParams)).forEach(([key, value]) => {
        (paramOptions[key] || paramOptions.default)(value)
      })

    },
    select(payload: filterOption[]) {
      this.selected = payload
    },
    search(payload: string) {
      this.term = payload
    },
    toggleFilters() {
      this.filtersOpen = !this.filtersOpen
    },
    setFrom(payload:number) {
      this.from = payload
    },
    setSize(payload:number) {
      this.size = payload
    },
    setCustomRange(payload: {key: string, value: filterOption}) {
      this.aggregations[payload.key].customrange = payload.value;
    },
    setResult(payload: WikiSearchApiResults) {

      this.hits = JSON.parse(payload.result.hits)
      this.total = payload.result.total

      const mapBucket = ([index, bucket]: [string, filterOption]) => {
        return [ bucket.key || index, {
          ...bucket,
          key: index,
          value: bucket.key || index,
          label: bucket.label || bucket.key || index,
          type: bucket.from ? 'range' : 'bucket'
        }]
      };

      this.aggregations = Object.fromEntries(Object.entries(payload.result.aggs)
        .map(([key, value]) => {
          const normalized = Array.isArray(value[key].buckets)
            ? value[key].buckets.map((bucket) => mapBucket([key, bucket]))
            : Object.entries(value[key].buckets).map(([k, bucket]) => mapBucket([k, bucket]))

          return [key, Object.fromEntries(normalized)]
        }))
    }
  }
})


