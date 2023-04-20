<template>
	<div class="wikisearch-results">
		<div
		v-for="result in results"
		:key="'result-' + result._id"
		>
		<Result 
		  :resultData="result"
		>
		</Result>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../../stores/store'
import Result from './Result.vue';

const store = useStore()
const results = computed(() => store.hits)

</script>

<style>
.wikisearch-results {
    display: grid;
    gap: 1em;
}
</style>