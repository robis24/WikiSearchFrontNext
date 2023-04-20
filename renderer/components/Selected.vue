<template>
  <div class="wikisearch-selected">
    <cdx-button-group :buttons="buttons" @click="updateSelected" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CdxButtonGroup, ButtonGroupItem } from '@wikimedia/codex';
import { useStore } from './../../stores/store'
import { filterOption } from './../../stores/types'

const store = useStore()

const buttons: ButtonGroupItem[] = computed(() => store.selected.length
  ? [ ...store.selected.map((i) => ({
    ...i,
    label: i.label || i.value,
    value: {
      key: i.key,
      value: i.value
    }
  })), {label: 'Clear all filters', value: { key: 'clear-filters' }}]
  : []
);

const updateSelected = (selected: filterOption) => {
  const updated = selected.key === 'clear-filters' ? [] : store.selected.filter(option => selected.value !== option.value)
  store.select(updated)
}

</script>


<style lang="less">
.wikisearch-selected {
  grid-area: selected;
}

.wikisearch-selected__clear {
  white-space: nowrap;
  cursor: pointer;
  color: var(--ws-color);
  border: 1px solid transparent;
  padding: 6px 6px;
}
</style>
