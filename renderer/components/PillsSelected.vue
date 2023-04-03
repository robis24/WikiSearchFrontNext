<template>
  <div>
	<cdx-button-group
		:buttons="buttons"
		@click="updateSelected"
	/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CdxButtonGroup, ButtonGroupItem } from '@wikimedia/codex';
import { useCounter } from './../../stores/store'
const counterStore = useCounter()





const buttons: ButtonGroupItem[] = computed(() => counterStore.selected.map(i => ({
  ...i,
  label: i.label || i.value,
  value: {
    key: i.key,
    value: i.value
  }
})));
            

const updateSelected = (e) => {
    

  counterStore.select(counterStore.selected.filter(z => e.value !== z.value))


}
   
</script>


<style>
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
