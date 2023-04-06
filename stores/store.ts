import { defineStore } from 'pinia'
import mw from './mock';

interface Config {
  settings: {
    size?: number,
    title: {
      name: string,
      key: number,
      type: string,
      highlight: boolean,
    },
  },
  facetSettings: ISfilterSetting,
  hitSettings: ISResultSetting
}

interface ISfilterSetting {
  [key: string]: filterSetting
}

interface ISResultSetting {
  [key: string]: ResultSetting
}

interface ResultSetting {
  key: number,
  type: string,
  label?: string,
  display?: string,
  template?: string,
  value?: string,
  count?: string
}

interface ISfilterOption {
  [key: string]: filterOption
}

interface Result {
  _source: {
      subject: {
          title: string
      }
  },
  _id: Number
}

export interface filterOption {
  key: string,
  value: string,
  label: string,
  doc_count?: Number
}

interface filterSetting {
  key: string,
  value: string,
  label?: string,
  display?: string,
  doc_count?: Number
}

interface State {
  total: number,
  term: string,
  from: number,
  size: number,
  selected: filterOption[],
  config: Config,
  aggregations: ISfilterOption,
  hits: Result[]
}

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
      selected: [],
      config,
      aggregations: {}
    } as State
  ),
  actions: {
    async fetchResult() {
      const params = {
        action: 'query',
        meta: 'WikiSearch',
        format: 'json',
        filter: JSON.stringify(this.selected),
        //term: prepareQuery(this.term),
        from: this.from,
        limit: this.size,
        // pageid: mediaWikiValues.wgArticleId,
        // aggregations: JSON.stringify(state.dates),
      };

      const response = await api.post(params)
      this.setResult(response);

    },
    select(payload: filterOption[]) {
      this.selected = payload
    },
    search(payload: string) {
      this.term = payload
    },
    setResult(payload) {
      this.hits = JSON.parse(payload.result.hits)
      this.total = payload.result.total

      const mapBucket = ([index, bucket]) => {
        return {
          ...bucket,
          key: index,
          value: bucket.key || index,
          label: bucket.label || bucket.key || index
        }
      };

      this.aggregations = Object.fromEntries(Object.entries(payload.result.aggs)
        .map(([key, value]) => {
          const normalized = Array.isArray(value[key].buckets)
            ? value[key].buckets.map((bucket) => mapBucket([key, bucket]))
            : Object.entries(value[key].buckets).map(mapBucket)

          return [key, normalized]
        }))
    }
  }
})


