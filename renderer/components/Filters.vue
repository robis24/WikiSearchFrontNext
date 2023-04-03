<template>
    <div class="wikisearch-filters__wrapper">
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
import { useCounter } from './../../stores/store'
import { CdxSearchInput } from '@wikimedia/codex';
import Filter from './Filter.vue';
import FacetCombobox from './filters/FacetCombobox.vue';
import Checkbox from './filters/Checkbox.vue';


const counterStore = useCounter()

const components = {
    combobox: FacetCombobox,
    search: CdxSearchInput,
    default: Checkbox,
};

const filters = Object.entries(counterStore.config.facetSettings)
    .map(([key, value]) => {
        
         return {
            key,
            config: value,
            component: components[value.display as keyof typeof components] || components.default,
        }
    });

const updateSelected = (e) => {
    

    counterStore.select(e)


}

</script>
  
<style></style>
  