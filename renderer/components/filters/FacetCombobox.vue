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
import { useCounter } from './../../../stores/store'
const counterStore = useCounter()

const props = defineProps({
    filterName: String,
  })


const menuItems: MenuItemData[] = counterStore.aggregations[props.filterName] || []

const selection = ref('');
    
</script>

<style >
</style>
