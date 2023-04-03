<template>
  <div class="wikisearch">
    <SearchInput/>
    <Selected/>
    total {{ total }}
    <Filters/>
    <Result/>
  </div>
</template>

<script setup lang="ts">
import { onServerPrefetch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounter } from './../../stores/store'
import SearchInput from './SearchInput.vue';
import Filters from './Filters.vue';
import Selected from './PillsSelected.vue';
import Result from './Result.vue';

const counterStore = useCounter()
const { total } = storeToRefs(counterStore) 


const loadTodos = async () => {
  await counterStore.fetchResult();
}
onServerPrefetch(loadTodos)
// onMounted(loadTodos)

</script>
