<template>
       <div>
        <cdx-checkbox 
            v-for="checkbox in checkboxes" 
            :key="'checkbox-' + checkbox.value" 
            v-model="checkboxValue"
            :input-value="checkbox.value" 
            >
            <span>{{ checkbox.label }}</span> <span>{{ checkbox.doc_count }}</span>
        </cdx-checkbox>
        </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CdxCheckbox } from '@wikimedia/codex';
import { useCounter } from './../../../stores/store'
const counterStore = useCounter()

const emit = defineEmits(['updateSelected']);

const props = defineProps({
  filterName: String
})

const checkboxes = computed(() => props.filterName ? counterStore.aggregations[props.filterName] || [] : [])

const checkboxValue = computed({
  get () {    
    return counterStore.selected
      .filter(filter => filter.key === props.filterName)
      .map(filter => filter.value)
       || []
  },
  set (value) {
    return emit('updateSelected', [...counterStore.selected
      .filter(filter => filter.key !== props.filterName),
      ...value.map(val => ({
        key: props.filterName,
        value: val
     }))])
  }
})

</script>