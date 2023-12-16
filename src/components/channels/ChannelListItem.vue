<script setup lang="ts">
import { computed, ref } from 'vue';

import { Genre } from 'src/types/genres';

import { useFavoritesStore } from 'stores/favorites';

const favoritesStore = useFavoritesStore();

interface Props {
  name: string;
  urlImage: string;
  programmName: string;
  genres: Genre[];
  programmId: number;
}

const props = defineProps<Props>();

const isAddedToFavorites = computed(() =>
  favoritesStore.favorites.includes(props.programmId)
);

const handleOnFavorites = () => {
  if (isAddedToFavorites.value) {
    favoritesStore.removeInFavorites(props.programmId);
  } else {
    favoritesStore.addToFavorites(props.programmId);
  }
};

const isVisible = ref(false);
</script>
<template>
  <q-card class="my-card q-ma-sm">
    <span>
      <q-img
        src="https://cdn.quasar.dev/img/mountains.jpg"
        @mouseenter="isVisible = true"
        @mouseleave="isVisible = false"
        @mouseover="isVisible = true"
      >
        <div
          v-if="isVisible || isAddedToFavorites"
          class="text-subtitle2 absolute-top text-right"
          style="background-color: inherit"
        >
          <q-btn
            round
            color="primary"
            size="sm"
            :icon="isAddedToFavorites ? 'mdi-heart' : 'mdi-heart-outline'"
            @click="handleOnFavorites"
          />
        </div>
        <div
          v-show="isVisible"
          class="absolute-bottom text-subtitle1 text-left"
          @mouseover.stop
        >
          {{ programmName }}
        </div>
      </q-img>
    </span>

    <q-card-section>
      <div class="text-h6">{{ name }}</div>
    </q-card-section>
    <q-card-actions align="left">
      <template v-for="genre in genres" :key="genre.idprogram">
        <q-chip
          outline
          color="secondary"
          text-color="white"
          icon="mdi-pound"
          size="sm"
        >
          {{ genre.name }}
        </q-chip>
      </template>
    </q-card-actions>
  </q-card>
</template>
