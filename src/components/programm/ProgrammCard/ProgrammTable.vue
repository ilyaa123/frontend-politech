<script setup lang="ts">
import { QTableProps } from 'quasar';

import { Shedule } from 'src/types/shedule';

import { useProgrammStore } from 'stores/programm';
import { computed } from 'vue';

interface Props {
  date: string;
  shedules: Shedule[];
}

interface Emits {
  (key: 'setDate', value: string): void;
}

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const programmStore = useProgrammStore();

const columns: QTableProps['columns'] = [
  {
    name: 'time',
    label: 'Время',
    field: 'time',
    align: 'left',
  },
  {
    name: 'programm',
    label: 'Программа',
    field: 'programm_name',
    align: 'right',
  },
];

const title = computed(() => 'Расписание на ' + props.date);

const handleOnNext = () => {
  const components = props.date.split('.');
  const day = parseInt(components[0]);
  const month = parseInt(components[1]) - 1;
  const year = parseInt(components[2]);

  const date = new Date(year, month, day);

  date.setDate(date.getDate() + 1);

  const newDateString =
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

  emits('setDate', newDateString);
};

const handleOnPrev = () => {
  const components = props.date.split('.');
  const day = parseInt(components[0]);
  const month = parseInt(components[1]) - 1;
  const year = parseInt(components[2]);

  const date = new Date(year, month, day);

  date.setDate(date.getDate() - 1);

  const newDateString =
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  emits('setDate', newDateString);
};
</script>
<template>
  <q-table
    :columns="columns"
    :rows="shedules"
    :title="title"
    no-data-label="Ничего не надено"
    style="width: 100%"
    flat
    hide-bottom
  >
    <template #top>
      <div class="row justify-between align-center text-h6" style="width: 100%">
        <q-btn
          round
          color="primary"
          icon="mdi-arrow-left"
          @click="handleOnPrev"
        />
        Расписание на {{ date }}
        <q-btn
          round
          color="primary"
          icon="mdi-arrow-right"
          @click="handleOnNext"
        />
      </div>
    </template>
    <template #body="props">
      <q-tr :props="props">
        <q-td key="time" :props="props">
          {{ props.row.times.join(', ') }}
        </q-td>
        <q-td key="programm" :props="props">
          <q-btn
            flat
            align="right"
            class="btn-fixed-width"
            color="primary"
            :label="props.row.programm.programm_name"
            @click="programmStore.setSelectedProgramm(props.row.programm.id)"
          />
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>
