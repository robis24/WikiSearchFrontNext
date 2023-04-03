<template>
    <div
      :class="
        `wikisearch-filter
         wikisearch-combobox
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
import { useCounter } from './../../stores/store'

const counterStore = useCounter()
    
  const props = defineProps({
    filterName: String,
  })
  

  const config = counterStore.config.facetSettings[props.filterName];
  
  // import { strip } from '../../utilities/stringUtils';
  
  const filterLabel =  config.label || props.filterName.replace('_', ' ');
  const stripedName = props.filterName;
      
  </script>
  
  <style >
  
  </style>
  