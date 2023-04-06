<template>
  <button type="button" @click="store.increment">Counter {{ count }}</button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from './../../stores/store'
const state = reactive({ count: 0 })

const store = useStore()
const { count } = storeToRefs(store) 
</script>
