<script setup lang="ts">
import { computed } from 'vue';

import ProgrammContent from 'components/programm/ProgrammContent.vue';

interface Props {
  modelValue: boolean;
}

interface Emits {
  (key: 'update:model-value', value: boolean): void;
}

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emits('update:model-value', value),
});
</script>
<template>
  <q-dialog v-model="isOpen" position="bottom">
    <ProgrammContent />
  </q-dialog>
</template>
