<template>
  <div 
    class="wikisearch"
    :class="{
      'wikisearch--filters-closed': !isOpen
    }"
  >
    <Search />
    <Selected />
    <Filters v-show="isOpen"/>
    <Total />
    <Action />
    <Results />
    <Pager />
  </div>
</template>

<script setup lang="ts">
import { onServerPrefetch, onMounted, computed } from 'vue'
import { useStore } from './../../stores/store'
import Search from './Search.vue';
import Selected from './Selected.vue';
import Filters from './Filters.vue';
import Total from './Total.vue';
import Action from './Action.vue';
import Results from './Results.vue';
import Pager from './Pager.vue';

const store = useStore()

const isOpen = computed(() => store.filtersOpen)

const loadTodos = async () => {
  store.getStateFromUrlParams();
  await store.fetchResult();

  store.$subscribe((mutation, state) => {

    if (mutation.events.key !== 'selected') {
      return
    }

    const url = new URL(window.location.href);
    const { searchParams } = url;

    const paramOptions = {
      filters: () => state.selected.map((option: filterOption) => {

        const aggregations = state.aggregations?.[option.key]?.[option.value] || {};

        const types = {
          range: [`range_${option.key}_${option.value}`, `${aggregations.from || option.from }_${aggregations.to || option.to}`],
          query: [`query_${option.key}`, option.value],
          default: [option.key, option.value]
        }

        return (types[aggregations.type || option.type] || types.default).join('^^')
      }).join('~~'),
      term: () => state.term,
      offset: () => state.from > 0,
      sort: () => state.sort && state.sort !== 'score',
      order: () => state.order && state.order !== 'desc'
    }

    Object.entries(paramOptions).forEach(([key, value]) => {
      value() ? searchParams.set(key, value()) : searchParams.delete(key);
    })

    window.history.replaceState('', '', url)

    store.fetchResult()
  })
}
onServerPrefetch(loadTodos)
onMounted(loadTodos)

</script>


<style>
@import '@wikimedia/codex/dist/codex.style.css';

.wikisearch {
  /* vars */
  --ws-color-darker: hsl(220, 54%, 36%);
  --ws-color: hsl(220, 60%, 50%);
  --ws-color-lighter: hsl(220, 90%, 61%);
  --ws-color-lightest: hsl(214, 100%, 96%);
  --ws-white: hsl(0, 0%, 100%);
  --tint-1: hsl(210, 17%, 98%);
  --tint-2: hsl(220, 17%, 93%);
  --gray-1: hsl(0, 0%, 89%);
  --gray-2: hsl(213, 9%, 80%);
  --ws-border-color: hsl(212, 9%, 66%);
  --ws-border-color-darker: hsl(213, 5%, 47%);
  --ws-text-color-muted: hsl(207, 5%, 35%);
  --ws-black-lighter: hsl(210, 3%, 13%);
  --ws-black: hsl(0, 0%, 0%);
  --border-1: 1px solid var(--ws-border-color);
  --star-size: 1.5em;
  --transition-short: color 100ms, background-color 100ms, border-color 100ms, box-shadow 100ms;
  /* grid */
  display: grid;
  grid-template-columns: minmax(20ch, 30ch) 1fr auto auto;
  grid-template-rows:
    auto minmax(2em, auto) 1fr;
  grid-template-areas:
    "search search search search"
    "selected selected action total"
    "filters results results results"
    "filters pager pager pager";
  grid-gap: 0.5em 2em;
  /* styles */
  padding: 1em;
  font-size: 0.875em;
  line-height: 1.6;
  font-family: sans-serif;
}

.wikisearch.wikisearch--filters-closed {  
  grid-template-columns: 1fr auto auto;
  grid-template-areas:
    "search search search"
    "selected action total"
    "results results results"
    "pager pager pager";
}

.wikisearch-search {
  grid-area: search;
}

.wikisearch-selected {
  grid-area: selected;
}

.wikisearch-filters {
  grid-area: filters;
}

.wikisearch-action {
  grid-area: action;
}

.wikisearch-total {
  grid-area: total;
}

.wikisearch-results {
  grid-area: results;
}

.wikisearch-pager {
  grid-area: pager;
}

.wikisearch--theme-dark {
  --ws-color-darker: hsl(220, 54%, 36%);
  --ws-color: hsl(220, 60%, 50%);
  --ws-color-lighter: hsl(220, 90%, 61%);
  --ws-color-lightest: hsl(212, 18%, 20%);
  --ws-white: hsl(0, 0%, 15%);
  --tint-1: hsl(0, 0%, 22%);
  --tint-2: hsl(0, 0%, 33%);
  --gray-1: hsl(0, 0%, 11%);
  --gray-2: hsl(240, 0%, 49%);
  --ws-border-color: hsl(0, 0%, 52%);
  --ws-border-color-darker: hsl(0, 0%, 55%);
  --ws-text-color-muted: hsl(0, 0%, 83%);
  --ws-black-lighter: hsl(0, 0%, 95%);
  --ws-black: hsl(0, 0%, 100%);
  background-color: var(--ws-white);
  color: var(--ws-black);
}

.wikisearch-filters {
  grid-area: filters;
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 1.5em;
}

.wikisearch-filter {
  position: relative;
}

.wikisearch-filter__label {
  font-weight: bold;
}

/* hide on desktop */
.wssearch-button--hide-filters,
.wssearch-button--show-filters {
  display: none;
}

.wikisearch-action {
  grid-area: action;
  display: flex;
  align-items: center;
}

.wikisearch-action__button {
  width: fit-content;
}

.wikisearch-total {
  grid-area: total;
  color: var(--ws-text-color-muted);
  justify-self: end;
  margin-right: 1em;
}

.wikisearch-results {
  grid-area: results;
  transition: filter 0.2s ease-in-out;
}

.wikisearch-order {
  grid-area: order;
}

.wikisearch-element--pending {
  background-color: var(--tint-2);
  background-image: linear-gradient(135deg,
      var(--ws-white) 25%,
      transparent 25%,
      transparent 50%,
      var(--ws-white) 50%,
      var(--ws-white) 75%,
      transparent 75%, transparent);
  background-size: 1.42857143em 1.42857143em;
  animation: wikisearch-input--pending-animation 650ms linear infinite;
}

@keyframes wikisearch-input--pending-animation {
  0% {
    background-position: -1.42857143em 0
  }

  100% {
    background-position: 0 0
  }
}

/* mobile */

@media (max-width: 500px) {
  .wikisearch {
    grid-template-columns: 2fr auto;
    grid-template-areas:
      "search search"
      "selected order"
      "selected total"
      "results results";
    grid-gap: .5em 0;
  }

  .wikisearch-filters {
    grid-area: unset;
    position: fixed;
    background-color: var(--ws-white);
    left: 0;
    right: 0;
    padding: 1em;
    bottom: 0;
    top: 0;
    z-index: 9;
  }

  .wikisearch-filters__wrapper {
    overflow-x: hidden;
    height: calc(100vh - 5em);
    overflow-y: auto;
  }

  .wikisearch-filters.wikisearch-filters__hiden {
    display: none;
  }

  .wssearch-button--hide-filters,
  .wssearch-button--show-filters {
    display: block;
  }

  .wssearch-button--show-filters {
    position: fixed;
    bottom: 2em;
    left: calc(50vw - 47px);
    text-align: center;
  }
}

/* print */

@media print {

  .wikisearch-selected,
  .wikisearch-filters,
  .wikisearch-total,
  .wikisearch-action,
  .wikisearch-search,
  .wikisearch-pager {
    display: none;
  }

  .wikisearch {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "results";
    grid-gap: 0;
  }
}
</style>

