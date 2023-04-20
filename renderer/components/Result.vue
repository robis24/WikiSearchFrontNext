<template>
	<div class="wikisearch-result">
		<cdx-card 
			:url="resultData._source.subject.title"
			:force-thumbnail="true"
			:thumbnail="thumbnailData"
		>
			<template #title>
				{{ titleValue || resultData._source.subject.title }}
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
import { Result } from './../../stores/types'
import { useStore } from '../../stores/store'

const store = useStore()

const props = defineProps<{
    resultData: Result
}>()
  

const thumbnailData = {
	url: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/200px-FullMoon2010.jpg'
};

const { title } = store.config.settings

const { hitSettings } = store.config

//Object.entries(hitSettings).map()

const titleProperty = props.resultData._source?.[`P:${title.key}`]?.[title.type]
const titleValue = computed(() => titleProperty ? titleProperty.join(',') : "");
// const hit = store.config.
console.log(titleProperty, titleValue)

// const results = computed(() => store.hits)


</script>

