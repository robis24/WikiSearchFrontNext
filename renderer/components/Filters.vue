<template>
    <div class="wikisearch-filters">
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
import { useStore, filterOption } from './../../stores/store'
import { CdxSearchInput } from '@wikimedia/codex';
import Filter from './Filter.vue';
import Combobox from './filters/Combobox.vue';
import Checkbox from './filters/Checkbox.vue';


const store = useStore()

const components = {
    combobox: Combobox,
    search: CdxSearchInput,
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

</script>
  
<style></style>
  