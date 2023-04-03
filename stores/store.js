import { defineStore } from 'pinia'
import mw from './mock';

const api = new mw.Api();

export const useCounter = defineStore('counter', {
  state: () => (
    {
      hits: [],
      total: 0,
      selected: [],
      config: mw.config.values.WikiSearchFront.config,
      aggregations: {}
    }
  ),
  actions: {
    async fetchResult() {
      const params = {
        action: 'query',
        meta: 'WikiSearch',
        format: 'json',
        // filter: JSON.stringify(selected),
        // term: prepareQuery(state.term),
        // from: state.from,
        // limit: state.size,
        // pageid: mediaWikiValues.wgArticleId,
        // aggregations: JSON.stringify(state.dates),
      };

      const response = await api.post(params)
      this.setResult(response);

    },
    select(payload) {
      this.selected = payload
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


