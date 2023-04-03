<template>
    <div 
      v-for="result in results"
      :key="'result-' + result._id"
    >
	<cdx-card 
        :url="result._source.subject.title"
		:force-thumbnail="true"
        :thumbnail="thumbnailData"
    >
		<template #title>
			Card titles should be fairly short, but will wrap onto a new line if
			the text becomes long enough
		</template>
		<template #description>
			Description text will commonly be longer than a single line, and
			will wrap onto new lines, expanding the height of the Card to
			accommodate the content.
		</template>
		<template #supporting-text>
			<cdx-icon :icon="cdxIconWatchlist" size="small" />
			Supporting text should also be kept short, but if it is long, it
			will wrap onto a new line like the rest of the Card content.
		</template>
	</cdx-card>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CdxCard, CdxIcon } from '@wikimedia/codex';
import { cdxIconWatchlist } from '@wikimedia/codex-icons';
import { useCounter } from './../../stores/store'
const counterStore = useCounter()


const thumbnailData = {
	url: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/200px-FullMoon2010.jpg'
};

const results = computed(() => counterStore.hits)


</script>