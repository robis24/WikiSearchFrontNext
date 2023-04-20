<template>
    <cdx-lookup
			v-model:selected="selection"
			v-model:expanded="expanded"
			:menu-items="menuItems"
			:clearable="true"
			:menu-config="{
				visibleItemLimit: 4
			}"
			placeholder="Type or choose an option"
			@input="onInput"
			@focus="expanded = true"
		>
      <template #menu-item="{ menuItem }">
				<span> {{ menuItem.value }}</span> <span> {{ menuItem.doc_count }}</span>
			</template>
		</cdx-lookup>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { CdxLookup, MenuItemData } from '@wikimedia/codex';
import { useStore } from './../../../stores/store'

import mw from './../../../stores/mock.js'

const store = useStore()

const props = defineProps({
    filterName: { type: String, required: true },
  })

  const emit = defineEmits(['updateSelected']);

const menuItems = ref<MenuItemData[]>( [] );
const expanded = ref(true)

const selection = computed({
  get() {
    const hasValue = store.selected.filter(filter => filter.key === props.filterName)[0] || { value: '' }
    return hasValue.value
  },
  set(value) {
    const filteredSelection = store.selected
      .filter(filter => filter.key !== props.filterName)


    return emit('updateSelected', value
      ? [
        ...filteredSelection,
        {
          key: props.filterName,
          value
        }
      ]
      : filteredSelection)
  }
})

const onInput = async (value: string) => {

    const { query, data, text } = store.config.facetSettings[props.filterName]
      
      const output = text  ? `|?${data}|?${text}` : `|?${text}`;
      const input = text || data;
      const askQuery = `${query}[[${input}::in:${value}]]${output}`;

      const params = {
        action: 'ask',
        query: askQuery,
        format: 'json',
        formatversion: 2,
      };
    
    var api = new mw.Api();
    const result = await api.get(params)
    console.log('result')
	menuItems.value = result;
}
    
</script>

<style >
</style>
