<script setup lang="ts">
import { Genre } from 'src/types/genres';
import { ref } from 'vue';

interface Props {
  name: string;
  urlImage: string;
  urlVideo: string;
  programmName: string;
  genres: Genre[];
}

defineProps<Props>();

const isVisible = ref(false);
</script>
<template>
  <q-card class="my-card">
    <span
      @mouseenter.stop="isVisible = true"
      @mouseleave.stop="isVisible = false"
      @mouseover.stop="isVisible = false"
    >
      <template v-if="true">
        <video :controls="false" :src="urlVideo" :autoplay="true" muted></video>
      </template>
      <template v-else>
        <q-img
          width="100%"
          ratio="16/9"
          class="cursor-pointer"
          src="https://cdn.quasar.dev/img/mountains.jpg"
        >
          <div
            v-show="isVisible"
            class="absolute-bottom text-subtitle1 text-left"
          >
            {{ programmName }}
          </div>
        </q-img>
      </template>
    </span>
    <q-card-section>
      <div class="text-h6">{{ name }}</div>
    </q-card-section>
    <q-card-actions align="left">
      <template v-for="genre in genres" :key="genre.idprogram">
        <q-chip outline color="secondary" text-color="white" icon="mdi-pound">
          {{ genre.genre }}
        </q-chip>
      </template>
    </q-card-actions>
  </q-card>
</template>
