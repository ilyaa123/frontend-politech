import { ref } from 'vue';

import { defineStore } from 'pinia';

import { getProgramms } from 'src/api/programms';

export const useProgrammStore = defineStore('programm', () => {
  const selectedProgramm = ref<number | null>(null);

  const setSelectedProgramm = (id: number | null) => {
    selectedProgramm.value = id;
  };

  const getProgrammItem = async (id: number) => {
    return getProgramms(id).then((res) => res.data);
  };

  return {
    selectedProgramm,
    setSelectedProgramm,
    getProgrammItem,
  };
});
