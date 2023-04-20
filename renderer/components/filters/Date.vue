<template>
    <div class="wikisearch-filters__date">
     <Checkbox
        :filterName="filterName"
        @update-selected="$emit('updateSelected', $event)"
    />
        <div class="wikisearch-filters__date-input">
            <cdx-checkbox 
                    v-model="checkboxValue"
                    :input-value="checkboxValue" 
                    >
                <span
                    class="wikisearch-filters__date-label"
                    @click.stop.prevent="openDateInput('from')"
                >
                    {{ formatedFrom }}
                </span>
                -
                <span
                   class="wikisearch-filters__date-label"
                   @click.stop.prevent="openDateInput('to')"
                >
                    {{ formatedTo }}
                </span>
            </cdx-checkbox>
            <DateInput
                    v-show="openInput === 'from'"
                    disabled-direction="before"
                    ref="dateInputFrom"
                    :disabled-date="customDates.to"
                    :value="customDates.from"
                    @change="setCustomDate($event, 'from')"
                    @blur="openInput = ''"
            />
            <DateInput
                    v-show="openInput === 'to'"
                    disabled-direction="after"
                    ref="dateInputTo"
                    :disabled-date="customDates.from"
                    :value="customDates.to"
                    @change="setCustomDate($event, 'to')"
                    @blur="openInput = ''"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import { ref, computed, nextTick } from 'vue';
import { useStore } from '../../../stores/store';
import { CdxCheckbox } from '@wikimedia/codex';

import Checkbox from './Checkbox.vue';
import DateInput from './../DateInput.vue';


const store = useStore()
const format = 'D MMM YYYY';

const emit = defineEmits(['updateSelected']);

const props = defineProps({
    filterName: { type: String, required: true },
})

const customDates = ref({
    from: 0,
    to: 0,
});

const openInput = ref("")

const dateInputFrom = ref(null)
const dateInputTo = ref(null)

const openDateInput = async (dateType: string) => {
    if (dateType === 'to') {
       await nextTick()
       dateInputTo?.value?.focusInput()
    }

    if (dateType === 'from') {
       await nextTick()
       dateInputFrom?.value?.focusInput()
    }

    openInput.value = dateType
}

const checkboxValue = computed({
    get () {    
        return !!store.selected.filter(filter => filter.key === props.filterName && filter.value === 'customrange').length;
    },
    set (selected) {
        updateSelected(selected)
    } 
})

const formatedFrom = computed(() => moment(customDates.value.from).format(format))
const formatedTo = computed(() => moment(customDates.value.to).format(format))

const updateSelected = (selected: boolean) => {

        const updatedSelection = selected
            ?   [
                    ...store.selected.filter(filter => filter.key !== props.filterName && filter.value !== 'customrange'),
                    { 
                        key: props.filterName,
                        value: 'customrange',
                        label: `${formatedFrom.value} - ${formatedTo.value}`,
                        from: customDates.value.from,
                        to: customDates.value.to,
                        type: 'range'
                    }
                ]
            :   store.selected.filter(filter => filter.key !== props.filterName && filter.value !== 'customrange')

           console.log(updatedSelection, selected) 
        return emit('updateSelected', updatedSelection)
}

const setCustomDate = (value, dateType) => {
    customDates.value[dateType] = value.format('YYYY-MM-DD');

    updateSelected(checkboxValue)

    // const customDateLabel = `${moment(customDates.from).format(format)} - ${moment(customDates.to).format(format)}`;
 
    // store.setCustomRange({
    //     key: props.filterName,
    //     value: {
    //         key: props.filterName,
    //         value: 'customrange',
    //         label: customDateLabel,
    //         from: customDates.from,
    //         to: customDates.to
    //     }    
    // })
}




</script>

<style>
.wikisearch-filters__date-input {
    position: relative;
    margin-top: 12px;
}

.wikisearch-filters__date-label {
    padding:.2em .5em ;
}

.wikisearch-filters__date-label:hover {
    background-color:rgba(0,24,73,.027);
    transition-property: background-color;
    transition-duration: .1s;
}
</style>