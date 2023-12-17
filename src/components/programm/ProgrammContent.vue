<script setup lang="ts">
import { ref, onBeforeMount, onUnmounted } from 'vue';

import { useProgrammStore } from 'stores/programm';

import { Programm } from 'src/types/programm';

const programmStore = useProgrammStore();

const programm = ref<Programm | null>(null);

onBeforeMount(() => {
  programmStore
    .getProgrammItem(programmStore.selectedProgramm as number)
    .then((res) => {
      programm.value = res;
    });
});

onUnmounted(() => {
  programm.value = null;
});
</script>
<template>
  <q-card class="my-card" flat bordered>
    <q-card-section v-if="programm">
      <div class="text-h6 row justify-between q-mb-xs">
        {{ programm.programm_name }}
        <q-chip square color="primary text-white">
          {{ programm.rating }}
        </q-chip>
      </div>
      <div class="text-subtitle1 q-mb-xs">
        {{ programm.description }}
      </div>
      <div class="row items-start">
        <template v-for="genre in programm.genres" :key="genre.id">
          <q-chip
            outline
            color="secondary"
            text-color="white"
            icon="mdi-pound"
            size="sm"
          >
            {{ genre.name }}
          </q-chip>
        </template>

        <!-- <q-rating size="18px" v-model="stars" :max="5" color="primary" />
        <span class="text-caption text-grey q-ml-sm">4.2 (551)</span> -->
      </div>
    </q-card-section>
  </q-card>
</template>
