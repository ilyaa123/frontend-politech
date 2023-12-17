<script setup lang="ts">
import { Genre } from 'src/types/genres';
import { computed, ref } from 'vue';

interface Props {
  genres: Genre[];
  selectedGenries: number[];
}

interface Emits {
  (key: 'changeFilter', value: number[]): void;
}

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const selectedGenries = computed(() => props.selectedGenries);

const handleOnAddGenries = (genry: Genre) => {
  emits('changeFilter', [...selectedGenries.value, genry.id]);
};

const handleOnRemoveGenries = (genry: Genre) => {
  emits(
    'changeFilter',
    [...selectedGenries.value].filter((item) => item !== genry.id)
  );
};

const getGenryIsActive = (id: number) => {
  return selectedGenries.value.includes(id);
};

const handleOnSetGenry = (genry: Genre) => {
  if (getGenryIsActive(genry.id)) {
    handleOnRemoveGenries(genry);
  } else {
    handleOnAddGenries(genry);
  }
};
</script>
<template>
  <div class="row">
    <template v-for="genre in genres" :key="genre.id">
      <q-chip
        :color="getGenryIsActive(genre.id) ? 'secondary' : 'primary'"
        text-color="white"
        icon="mdi-pound"
        size="lg"
        clickable
        @click="handleOnSetGenry(genre)"
      >
        {{ genre.name }}
      </q-chip>
    </template>
  </div>
</template>
