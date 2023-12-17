<script setup lang="ts">
import { computed } from 'vue';

import ProgrammModal from 'components/layout/Modals/ProgrammModal.vue';

import { useProgrammStore } from 'stores/programm';

const programmStore = useProgrammStore();

const isProgramModalOpen = computed({
  get: () => !!programmStore.selectedProgramm,
  set: () => programmStore.setSelectedProgramm(null),
});
</script>
<template>
  <div>
    <ProgrammModal v-model="isProgramModalOpen" />
  </div>
</template>
