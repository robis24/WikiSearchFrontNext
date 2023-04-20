<template>
  <div>
    <CdxSearchInput v-model="inputValue"></CdxSearchInput>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CdxSearchInput } from '@wikimedia/codex';
import { useStore } from './../../../stores/store'
const store = useStore()

const emit = defineEmits(['updateSelected']);

const props = defineProps({
  filterName: { type: String, required: true },
})

const inputValue = computed({
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
          value,
          type: 'query'
        }
      ]
      : filteredSelection)
  }
})

</script>