import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const counter = process.env.SERVER ? ref(0) : useStorage('counter-store', 0);

  const doubleCount = computed(() => counter.value * 2);
  function increment() {
    counter.value++;
  }
  return {
    counter,
    doubleCount,
    increment,
  };
});
