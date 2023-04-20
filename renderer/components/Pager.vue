<template>
  <div class="wikisearch-pager">
    <cdx-combobox
      v-if="settings['size options']"
      class="wikisearch-pager__dropdown"
      :menu-items="options"
      v-model:selected="selectedValue"
    />
    <div v-if="total > size">
      <span
        class="wikisearch-pager__item  wikisearch-pager__item--back"
        :class="showBack"
        @click="back"
      >
      <cdx-icon :icon="cdxIconDownTriangle" />
      </span>
      <span
        class="wikisearch-pager__item"
        :class="activePage(1)"
        @click="move"
      >
        <span> 1 </span>
      </span>
      <span
        v-show="from / size > 2 && total / size > 5"
        class="wikisearch-pager__item  wikisearch--dots"
        :class="showBack"
      >
        ...
      </span>
      <span
        v-for="(pager, index) in pagers"
        :key="index"
        class="wikisearch-pager__item"
        :class="activePage(pager)"
        @click="move"
      >
        <span>
          {{ pager }}
        </span>
      </span>
      <span
        v-show="from / size < last - 3 && total / size > 5"
        class="wikisearch-pager__item  wikisearch--dots"
      >
        ...
      </span>
      <span
        class="wikisearch-pager__item"
        :class="activePage(last)"
        @click="move"
      >
        <span>
          {{ last }}
        </span>
      </span>

      <span
        class="wikisearch-pager__item  wikisearch-pager__item--forward"
        :class="showForward"
        @click="next"
      >
         <cdx-icon :icon="cdxIconDownTriangle" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from './../../stores/store'
import { CdxCombobox, CdxIcon } from '@wikimedia/codex';
import { cdxIconDownTriangle } from '@wikimedia/codex-icons';


const store = useStore()

const total = computed(() => store.total)
const from = computed(() => store.from)
const size = computed(() => store.size)
const settings = store.config.settings
// settings

const selectedValue = computed({
  get () {    
    return store.size
  },
  set (value) {
    store.setSize(parseInt(value, 10))
  }
})

      const options = computed(() =>  {
        const options = settings['size options']
          .map((option) => ({ label: option + "page", value: option }));
        options.push({ label: "all", value: 999 });
        return options;
      })
      /**
       * @returns {Number} last pager number
       */
      const last = computed(() => Math.ceil(total.value / size.value))
      /**
       * @returns {String} class for hiding back button
       */
      const showBack = computed(() => from.value < 1 ? 'wikisearch-pager__item--hide' : '')
      /**
       * @returns {String} class for hiding forward button
       */
      const showForward = computed(() => from.value + size.value >= total.value ? 'wikisearch-pager__item--hide' : '')
      /**
       * @returns {Array|Boolean} pagers or false
       */
      const pagers = computed(() => {
        console.log(total.value, size.value)
        if (total.value >= size.value) {
          const pages = [];
          let i;
          const step = Math.ceil(total.value / size.value);
  
          if (step > 5) {
            if (from.value / size.value < 3) {
              for (i = 1; i < 4; i += 1) {
                pages.push(i + 1);
              }
            } else if (from.value / size.value > last - 4) {
              for (i = last - 4; i < last; i += 1) {
                pages.push(i);
              }
            } else {
              pages.push(from.value / size.value);
              pages.push(from.value / size.value + 1);
              pages.push(from.value / size.value + 2);
            }
            return pages;
          }
          for (i = 0; i < step; i += 1) {
            if (i + 1 > 1 && i + 1 < last) {
              pages.push(i + 1);
            }
          }
          return pages;
        }
        return false;
      })


      /**
       * @param {Number} pager number
       * @returns {String|Boolean} active class or false
       */
      const activePage = (pager) => {
        if (pager === from.value / size.value + 1) {
          return 'active';
        }
        return false;
      }
      /**
       * @event click back button
       */
      const back = () => {
        store.setFrom(from.value - size.value)
      }
      /**
       * @event click pager
       * @param {Event} e the click event
       */
      const move = (e) => {
        store.setFrom(Math.ceil(size.value * (e.target.innerText - 1)))
      }
      /**
       * @event click forward button
       */
      const next = () => {
        store.setFrom(from .value+ size.value)
      }

  </script>
  
  <style>
  .wikisearch-pager {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5em;
  }
  
  .wikisearch-pager__dropdown {
    max-width: fit-content;
  }
  
  .wikisearch-pager__item  {
    transition: var(--transition-short);
    cursor: pointer;
    width: 2em;
    display: inline-flex;
    justify-content: center;
    border-radius: 2px;
    position: relative;
    color: var(--ws-black);
  }
  .wikisearch-pager__item:hover {
    background-color: var(--ws-color-lighter);
    color: var(--ws-white);
  }
  .wikisearch-pager__item.active {
    font-weight: bold;
    color: var(--ws-white);
    background-color: var(--ws-color);
  }
  
  .wikisearch-pager__item--back-icon,
  .wikisearch-pager__item--forward-icon {
    cursor: pointer;
    left: unset;
  }
  
  .wikisearch-pager__item--back:hover,
  .wikisearch-pager__item--forward:hover {
    background-color: var(--ws-color-lighter);
  }
  
  .wikisearch-pager__item--back:after,
  .wikisearch-pager__item--forward:after {
    content: 'z';
    color: transparent;
  }
  
  .wikisearch-pager__item--hide,
  .wikisearch-pager__item--hide .wikisearch-pager__item--forward-icon,
  .wikisearch-pager__item--hide .wikisearch-pager__item--back-icon {
    background-image: none;
    pointer-events: none;
    color: var(--ws-white);
  }
  .wikisearch--dots {
    pointer-events: none;
  }
  </style>
  