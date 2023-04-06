<template>
    <div class="wikisearch-total">
        <b
            v-if="total > 0"
            class="wikisearch-total__nr"
        >
            {{ total }}
        </b>
        {{ $i18n('wikisearchfront-total', total) }}
    </div>
</template>
  
  <script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useStore } from './../../stores/store'

  
  const store = useStore()
  const { total } = storeToRefs(store) 

  
  </script>