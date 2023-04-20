<template>
    <div class="wikisearch-filters">
        <cdx-button
            weight="quiet"
            aria-label="open filters"
            @click="toggleFilters"
        >
            <cdx-icon :icon="cdxIconCollapse" />
        </cdx-button>
        <Filter 
            v-for="filterObject in filters" 
            :key="'filter-' + filterObject.key" 
            :filterName="filterObject.key"
        >
            <component 
                :is="filterObject.component"
                :config="filterObject.config"
                :filterName="filterObject.key"
                @updateSelected="updateSelected"
            />
        </Filter>
    </div>
</template>
  
<script setup lang="ts">
import { useStore } from './../../stores/store'
import { filterOption } from './../../stores/types'

import Filter from './Filter.vue';

import Combobox from './filters/Combobox.vue';
import Checkbox from './filters/Checkbox.vue';
import Search from './filters/Search.vue';
import Date from './filters/Date.vue';
import ElasticCombobox from "./filters/ElasticCombobox.vue";
import AskCombobox from "./filters/AskCombobox.vue";
import Range from "./filters/Range.vue";
import Sorted from "./filters/Sorted.vue";
import Switch from "./filters/Switch.vue";

import { CdxButton, CdxIcon } from '@wikimedia/codex';
import { cdxIconCollapse } from '@wikimedia/codex-icons';



const store = useStore()

const components = {
    combobox: Combobox,
    'elastic combobox': ElasticCombobox,
    'ask combobox': AskCombobox,
    range: Range,
    sorted: Sorted,
    switch: Switch,
    search: Search,
    date: Date,
    default: Checkbox,
};

const filters = Object.entries(store.config.facetSettings)
    .map(([key, value]) => {
        
         return {
            key,
            config: value,
            component: components[value.display as keyof typeof components] || components.default,
        }
    });

const updateSelected = (e: filterOption[] ) => {
    store.select(e)
}

const toggleFilters = () => {
    store.toggleFilters()
}

</script>
  
<style></style>
  