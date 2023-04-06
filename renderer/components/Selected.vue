<template>
  <div class="wikisearch-selected">
	<cdx-button-group
		:buttons="buttons"
		@click="updateSelected"
	/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CdxButtonGroup, ButtonGroupItem } from '@wikimedia/codex';
import { useStore, filterOption } from './../../stores/store'
const store = useStore()

const buttons: ButtonGroupItem[] = computed(() => store.selected.map(i => ({
  ...i,
  label: i.label || i.value,
  value: {
    key: i.key,
    value: i.value
  }
})));
            

const updateSelected = (e: filterOption) => {
    

  store.select(store.selected.filter(z => e.value !== z.value))


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
