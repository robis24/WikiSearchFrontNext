<template>
  <div class="wikisearch-sort">
    <cdx-button 
      :aria-label="`Toggle ${order ? 'asc' : 'desc'}`" 
      :title="`Toggle ${order ? 'asc' : 'desc'}`"
      @click="toggleOrder"
    >
      <cdx-icon :icon="order ? cdxIconDownTriangle : cdxIconUpTriangle" />
    </cdx-button>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { CdxButton, CdxIcon } from '@wikimedia/codex';
import { cdxIconDownTriangle } from '@wikimedia/codex-icons';
import { cdxIconUpTriangle } from '@wikimedia/codex-icons';

const order = ref(false)
const toggleOrder = () => {
  order.value = !order.value
}
</script>
