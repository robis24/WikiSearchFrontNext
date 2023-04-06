<template>
    <cdx-combobox
			v-model:selected="selection"
			:menu-items="menuItems"
			placeholder="Type or choose an option"
		>
      <template #menu-item="{ menuItem }">
				<span> {{ menuItem.value }}</span> <span> {{ menuItem.count }}</span>
			</template>
		</cdx-combobox>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CdxCombobox, MenuItemData } from '@wikimedia/codex';
import { useStore } from './../../../stores/store'
const store = useStore()

const props = defineProps({
    filterName: { type: String, required: true },
  })


const menuItems: MenuItemData[] = [store.aggregations[props.filterName]] || []

const selection = ref('');
    
</script>

<style >
</style>
