<template>
    <div
      class="wikisearch-date-input"
    >
      <CdxTextInput
        :value="currentDate.format('D MMM YYYY')"
        ref="input"
        @focus="focused = true"
        @blur="focused = false;$emit('blur')"
        @click="focused = true;justSelected = false"
      />
      <div
        v-if="focused && !justSelected"
        class="wikisearch-date-input__list-box"
        role="listbox"
        @mousedown.prevent="onItemMousedown"
        @click="focused = true"
      >
        <div class="wikisearch-date-input__tools">
          <CdxButton
            @click="setMonth(-1)"
          >
             <CdxIcon :icon="cdxIconPrevious" />
          </CdxButton>
          <CdxButton
            :icon="'up'"
            @click="changeDisplay"
          >
            {{ currentDate.format('MMMM') }} {{ currentDate.format('YYYY') }}
          </CdxButton>
          <CdxButton
            @click="setMonth(1)"
          >
            <CdxIcon :icon="cdxIconNext" />
          </CdxButton>
        </div>

        <div
          v-if="display === 'years'"
          class="wikisearch-date-input__years"
        >
          <div
            v-for="(year, index) in years"
            :key="'year-' + index"
            class="wikisearch-date-input__year"
            :class="{ 'wikisearch-date-input__year--active' : year === yearValue }"
            @click="currentDate = currentDate.clone().set('year', year);activeDisplay = 1"
          >
            {{ year }}
          </div>
        </div>

        <div
          v-if="display === 'months'"
          class="wikisearch-date-input__months"
        >
          <div
            v-for="(month, index) in months"
            :key="'month-' + index"
            class="wikisearch-date-input__month"
            :class="{ 'wikisearch-date-input__month--active' : month === monthValue }"
            @click="currentDate = currentDate.clone().set('month', index);activeDisplay = 0"
          >
            {{ month }}
          </div>
        </div>

        <div
          v-if="display === 'days'"
          class="wikisearch-date-input__days"
        >
          <div
            class="wikisearch-date-input__days-header"
          >
            <div
              v-for="(day, index) in calendar[0].days"
              :key="'header-' + index"
              class="wikisearch-date-input__days-header-item"
            >
              {{ day.format('dd') }}
            </div>
          </div>
          <div
            v-for="(week, index) in calendar"
            :key="'week-' + index"
            class="wikisearch-date-input__week"
          >
            <div
              v-for="(day, i) in week.days"
              :key="'day-' + index + i"
              class="wikisearch-date-input__day"
              :class="{
                'wikisearch-date-input__day--active' :
                  day.format('YYYY-MM-DD') === currentDate.format('YYYY-MM-DD'),
                'wikisearch-date-input__day--other-month' : day.format('M') !== currentDate.format('M'),
                'wikisearch-date-input__day--disabled' : disabledDirection
                  ? operators[disabledDirection](day, moment(disabledDate)) : false,
              }"
              @click="currentDate = day.clone();justSelected = true"
            >
              {{ day.format('D') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { cdxIconPrevious, cdxIconNext } from '@wikimedia/codex-icons';
import { CdxTextInput, CdxButton, CdxIcon } from '@wikimedia/codex';
import moment from 'moment';
import { Moment } from 'moment';
import { computed, ref, watch, nextTick } from 'vue';

const emit = defineEmits(['change', 'blur']);
const input = ref(null);

const displays = ['days', 'months', 'years']
const currentDate = ref(moment());
const activeDisplay = ref(0);
const displayYear = ref(parseInt(currentDate.value.format('Y'), 10))
const focused = ref(false)
const justSelected = ref(false)

const operators = {
    before: (a: Moment, b: Moment) => a.format('YYYYMMDD') > b.format('YYYYMMDD'),
    after: (a: Moment, b: Moment) => a.format('YYYYMMDD') < b.format('YYYYMMDD'),
}


const focusInput = async () => {
  console.log('focusss', input?.value)
  await nextTick()
  setTimeout(() => {
    input?.value?.focus()
    focused.value = true;
  }, 100)
}

defineExpose({ focusInput });


const calendar = computed(() => {
    const calendar = [];
    const startDay = currentDate.value.clone().startOf('month').startOf('week');
    const endDay = currentDate.value.clone().endOf('month').endOf('week');

    const date = startDay.clone().subtract(1, 'day');

    while (date.isBefore(endDay, 'day')) {
        calendar.push({
            days: Array(7).fill(0).map(() => date.add(1, 'day').clone()),
        });
    }
    return calendar;
})

const props = defineProps({
    value: {
        type: String,
        default: '',
    },
    disabledDirection: {
        type: String,
        default: 'before',
    },
    disabledDate: {
        type: Number,
        default: 0,
    },
})

const display = computed(() => {
    return displays[activeDisplay.value];
})

const yearValue = computed(() => {
    return parseInt(currentDate.value.format('YYYY'), 10);
})

const monthValue = computed(() => {
    return currentDate.value.format('MMMM');
})
const years = computed(() => {
    // 00 20 40 60 80
    const year = parseInt(currentDate.value.format('Y'), 10);
    const start = displayYear.value ? displayYear.value : year - (year % 10);
    return [...Array(20)].map((_, i) => start + i);
})

const months = computed(() => {
    return moment.months();
})

const changeDisplay = () => {
    activeDisplay.value = activeDisplay.value === 2 ? 0 : activeDisplay.value + 1;
}

const setMonth = (number: number) => {
    if (display.value !== 'years') {
        currentDate.value = currentDate.value.clone().add(number, 'months');
    } else {
        displayYear.value = years[0] + (20 * number);
    }
}

const onItemMousedown = () => {
    const mouseupHandler = () => {
        document.documentElement.removeEventListener('mouseup', mouseupHandler);
    };
    document.documentElement.addEventListener('mouseup', mouseupHandler);
}

watch(currentDate, (newValue, oldValue) => {
  emit('change', newValue);
});

</script>
  
<style>
.wikisearch-date-input {
    position: absolute;
    top: 0;
    left: 2em;
}

.wikisearch-date-input__list-box {
    position: absolute;
    min-width: 100%;
    /*  max-width: min(200%, 95vw); */
    width: auto;
    background-color: var(--ws-white);
    border-radius: 2px;
    border: 1px solid var(--ws-border-color);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 25%);
    overflow-y: auto;
    box-sizing: border-box;
    z-index: 1;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.wikisearch-date-input__tools {
    display: grid;
    grid-template-columns: auto 1fr auto;
}

.wikisearch-date-input__years {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.wikisearch-date-input__months {
    column-count: 2;
    gap: 0;
}

.wikisearch-date-input__days-header,
.wikisearch-date-input__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

.wikisearch-date-input__day,
.wikisearch-date-input__month,
.wikisearch-date-input__year {
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: var(--ws-white);
    background-color: var(--ws-white);
    transition: background-color 250ms, color 250ms;
}

.wikisearch-date-input__year {
    padding: .42em 0;
}

.wikisearch-date-input__day:hover,
.wikisearch-date-input__month:hover,
.wikisearch-date-input__year:hover {
    background-color: var(--ws-color);
    border-color: var(--ws-color);
    color: var(--ws-white);
}

.wikisearch-date-input__day--active,
.wikisearch-date-input__month--active,
.wikisearch-date-input__year--active {
    border-color: var(--ws-color);
}

.wikisearch-date-input__day,
.wikisearch-date-input__month,
.wikisearch-date-input__year,
.wikisearch-date-input__days-header-item {
    display: flex;
    justify-content: center;
    border-radius: 2px;
}

.wikisearch-date-input__day--other-month {
    color: var(--gray-2);
}

.wikisearch-date-input__days-header-item {
    font-weight: bold;
    color: var(--ws-text-color-muted);
}

.wikisearch-date-input__day--disabled {
    color: red;
}
</style>
  