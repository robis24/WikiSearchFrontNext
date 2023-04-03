<template>
  <button type="button" @click="counterStore.increment">Counter {{ count }}</button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounter } from './../../stores/store'
const state = reactive({ count: 0 })

const counterStore = useCounter()
const { count } = storeToRefs(counterStore) 
</script>
