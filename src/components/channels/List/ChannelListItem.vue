<script setup lang="ts">
import { computed, ref } from 'vue';

import { useRouter } from 'vue-router';

import { Genre } from 'src/types/genres';

import { useFavoritesStore } from 'stores/favorites';
import { useProgrammStore } from 'stores/programm';

const router = useRouter();

const favoritesStore = useFavoritesStore();
const programmStore = useProgrammStore();

interface Props {
  id: number;
  name: string;
  urlImage: string;
  genres: Genre[];
  programmId: number;
  programmName: string;
  programmRating: number;
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
  <q-card flat class="my-card q-ma-sm">
    <span>
      <q-img
        :src="urlImage"
        height="200px"
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
          class="absolute-bottom text-subtitle1 text-left cursor-pointer row justify-between items-center"
          style="width: 100%"
          @mouseover.stop
          @click="programmStore.setSelectedProgramm(programmId)"
        >
          {{ programmName }}
          <q-chip color="accent" size="sm">
            <q-avatar color="primary" text-color="white">{{
              programmRating
            }}</q-avatar>
            Рейтинг
          </q-chip>
        </div>
      </q-img>
    </span>

    <q-card-section>
      <div
        class="text-h6 cursor-pointer"
        @click="router.push(`/channel/${id}`)"
      >
        {{ name }}
      </div>
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
