<template>
    <div
      :class="
        `wikisearch-filter
         wikisearch-filter--${stripedName}`
      "
    >
      <span class="wikisearch-filter__label">
        <label>
          {{ filterLabel }}
        </label>
      </span>
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
import { useStore } from './../../stores/store'

const store = useStore()
    
  const props = defineProps({
    filterName: { type: String, required: true },
  })
  

  const config = store.config.facetSettings[props.filterName];
  
  // import { strip } from '../../utilities/stringUtils';
  
  const filterLabel =  config.label || props.filterName.replace('_', ' ');
  const stripedName = props.filterName;
      
  </script>
  
  <style >
  
  </style>
  