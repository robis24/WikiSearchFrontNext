import { createApp, defineComponent, h } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-banana-i18n';
import PageShell from './PageShell.vue'
import type { Component, PageContext, PageProps } from './types'


const messages = {
  en: {
    'wikisearchfront-clear-all-filters': 'Clear all filters',
    'wikisearchfront-total': '{{PLURAL:$1|result|results|0=No results}}',
    'wikisearchfront-date-range-from': 'Date from',
    'wikisearchfront-date-range-to': 'Date to',
    'wikisearchfront-more': 'Show more',
    'wikisearchfront-less': 'Show less',
    'wikisearchfront-order': 'Order by',
    'wikisearchfront-score': 'Relevance',
    'wikisearchfront-true': 'waar',
    'wikisearchfront-false': 'niet waar',
    'wikisearchfront-all': 'All',
    'wikisearchfront-page': ' / page',
    'wikisearchfront-info': `AND : combine two words <br>
                          OR : one or the other <br>
                          -word : exclude <br> 
                          "word" : exact <br>
                          w*rd : wildecard <br>
                          "word other"~5 : words appart`,
  },
  nl: {
    'wikisearchfront-clear-all-filters': 'wis alle filters',
    'wikisearchfront-search-total': '{{PLURAL:$1|$1 resultaat|$1 resultatent|0=Geen resultaten}}',
    'wikisearchfront-date-range-from': 'Datum vanaf',
    'wikisearchfront-date-range-to': 'Datum tot',
    'wikisearchfront-search-order': 'Sorteer op',
    'wikisearchfront-search-score': 'Relevantie',
  },
};


  const app = createApp(PageShell)

  const store = createPinia()

  const i18nPlugin = createI18n({
    locale: "en",
    messages: messages
  });
  
  app.use(i18nPlugin);

  app.use(store)
  // Make pageContext available from any Vue component

  app.mount('#app')






// add switch for spa no ssr , see: https://github.com/AaronBeaudoin/vite-plugin-ssr-example/blob/main/pages/_default/app.ts