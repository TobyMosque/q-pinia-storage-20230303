<template>
  <q-page class="row items-center justify-evenly">
    <div class="row q-col-gutter-sm" style="width: 480px">
      <div class="col">
        <q-input readonly filled dense label="Counter" :model-value="counter" />
      </div>
      <div class="col">
        <q-input
          readonly
          filled
          dense
          label="Doudle"
          :model-value="doubleCount"
        />
      </div>
      <div class="col col-auto">
        <q-btn @click="increment" color="primary" label="Increment" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useCounterStore } from 'src/stores/counter';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const store = useCounterStore();
const { counter } = storeToRefs(store);
const doubleCount = computed(() => store.doubleCount);
const { increment } = store;
</script>
