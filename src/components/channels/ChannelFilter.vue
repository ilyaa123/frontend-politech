<script setup lang="ts">
import { Genre } from 'src/types/genres';

interface Props {
  genres: Genre[];
}

defineProps<Props>();
</script>
<template>
  <div class="row">
    <template v-for="genre in genres" :key="genre.idprogram">
      <q-chip color="primary" text-color="white" icon="mdi-pound" size="lg">
        {{ genre.genre }}
      </q-chip>
    </template>
  </div>
</template>
