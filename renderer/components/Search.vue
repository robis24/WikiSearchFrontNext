<template>
  <div
    class="wikisearch-search"
    aria-disabled="false"
    role="search"
  >
    <cdx-search-input
			v-model="inputValue"
			button-label="Search"
			aria-label="SearchInput with Button demo"
      :clearable="true"
		/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CdxSearchInput } from '@wikimedia/codex';
import { useStore } from './../../stores/store'
const store = useStore()

const inputValue = computed<string>({
  get () {    
    return store.term
  },
  set (value) {
    store.search(value)
  }
})


</script>

<style>


.wikisearch-search .cdx-search-input {
    width: 100%;
}

.wikisearch-filter .cdx-text-input__input {
  min-width: 0px;
}



.wikisearch-syntax {
    width: calc(100% - 4.2em + 1px);
    position: absolute;
    pointer-events: none;
    padding: 0.4em 0;
    left: 2.2em;
    z-index: -1;
    color: transparent;
    white-space: break-spaces;
    box-sizing: border-box;
    overflow: hidden;
    white-space: pre;
    line-height: 1.42857143em;
    line-break: anywhere;
    border: 1px solid transparent;
    font-size: inherit;
    font-family: inherit;
    text-overflow: clip;
}

.wikisearch-syntax__item {
   border-radius: 3px;
}

.wikisearch-syntax__item--or,
.wikisearch-syntax__item--and {
   background: rgb(171, 219, 111);
   box-shadow: 0 0 0 1px rgb(171, 219, 111);
}

.wikisearch-syntax__item--minus {
   background: rgb(255, 135, 135);
   box-shadow: 0 0 0 1px  rgb(255, 135, 135);
}

.wikisearch-syntax__item--qoute {
   background: rgb(145, 185, 250);
   box-shadow: 0 0 0 1px  rgb(145, 185, 250);
}

.wikisearch-syntax__item--star {
    background: rgb(255, 222, 178);
    box-shadow: 0 0 0 1px  rgb(255, 222, 178);
}

</style>
