<script setup lang="ts">
import { Genre } from 'src/types/genres';
import { ref } from 'vue';

interface Props {
  genres: Genre[];
}

interface Emits {
  (key: 'changeFilter', value: number[]): void;
}

defineProps<Props>();

const emits = defineEmits<Emits>();

const selectedGenries = ref<number[]>([]);

const handleOnAddGenries = (genry: Genre) => {
  selectedGenries.value?.push(genry.id);
};

const handleOnRemoveGenries = (genry: Genre) => {
  selectedGenries.value = [...selectedGenries.value].filter(
    (item) => item !== genry.id
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
  emits('changeFilter', selectedGenries.value);
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
