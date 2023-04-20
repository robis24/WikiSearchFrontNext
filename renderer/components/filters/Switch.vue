<template>
    <div>
        <cdx-toggle-switch
			v-model="switchValue"
			aria-label="ToggleSwitch demo"
		/>
     </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CdxToggleSwitch } from '@wikimedia/codex';
import { useStore } from './../../../stores/store'
const store = useStore()

const emit = defineEmits(['updateSelected']);

const props = defineProps({
filterName: { type: String, required: true },
})


const switchValue = computed({
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