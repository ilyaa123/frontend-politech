<script setup lang="ts">
import { QTableProps } from 'quasar';

import { Shedule } from 'src/types/shedule';

import { useProgrammStore } from 'stores/programm';

interface Props {
  shedules: Shedule[];
}

defineProps<Props>();

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
</script>
<template>
  <q-table
    :columns="columns"
    :rows="shedules"
    title="Расписание"
    style="width: 100%"
    flat
    hide-bottom
    hide-header
  >
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
