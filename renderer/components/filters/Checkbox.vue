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
import { useStore } from './../../../stores/store'
const store = useStore()

const emit = defineEmits(['updateSelected']);

const props = defineProps({
  filterName: { type: String, required: true },
})

const checkboxes = computed(() => props.filterName ? store.aggregations[props.filterName] || [] : [])

const checkboxValue = computed({
  get () {    
    return store.selected
      .filter(filter => filter.key === props.filterName && filter.value !== 'customrange')
      .map(filter => filter.value)
       || []
  },
  set (value) {
    console.log(value)
    return emit('updateSelected', [...store.selected
      .filter(filter => filter.key !== props.filterName || filter.value === 'customrange'),
      ...value.map(val => ({
        key: props.filterName,
        value: val
     }))])
  }
})

</script>