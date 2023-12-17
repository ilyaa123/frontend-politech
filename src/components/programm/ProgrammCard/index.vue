<script setup lang="ts">
import { ref, computed } from 'vue';
import { Channel } from 'src/types/channel';

import ProgrammTable from 'components/programm/ProgrammCard/ProgrammTable.vue';

import { useProgrammStore } from 'stores/programm';
import channels from 'src/mocks/channels';

interface Props {
  channel: Channel | null;
}

const programmStore = useProgrammStore();

const props = defineProps<Props>();

const selectedDate = ref(new Date().toLocaleDateString());

const currentShedules = computed(() =>
  props.channel?.shedules.find(
    (item) => String(item.date) == String(selectedDate.value)
  )
);
</script>
<template>
  <div v-if="channel">
    <q-card class="my-card q-mb-lg" flat bordered>
      <q-card-section horizontal>
        <q-img height="300px" class="col-5" :src="channel.icopath" />

        <q-card-section style="width: 100%">
          <div>{{ channel.name }}</div>
          <div class="row justify-between items-center q-mb-sm">
            <span class="text-h6">Текущая телепрограмма:</span>
            <q-chip
              color="primary"
              text-color="white"
              size="large"
              clickable
              @click="programmStore.setSelectedProgramm(channel.programm.id)"
            >
              {{ channel.programm.programm_name }}
            </q-chip>
          </div>
          <div class="text-subtitle1 q-mb-lg">
            {{ channel.programm.description }}
          </div>
          <div class="text-subtitle3 q-mb-sm">Все телепрограммы:</div>
          <q-card-actions>
            <template v-for="programm in channel.programms" :key="programm.id">
              <q-chip
                clickable
                color="primary"
                text-color="white"
                icon="mdi-television"
                @click="programmStore.setSelectedProgramm(programm.id)"
              >
                {{ programm.programm_name }}
              </q-chip>
            </template>
          </q-card-actions>
        </q-card-section>
      </q-card-section>
    </q-card>
    <ProgrammTable
      :date="selectedDate"
      :shedules="currentShedules?.shedules || []"
      @set-date="(date) => (selectedDate = date)"
    />
  </div>
</template>
