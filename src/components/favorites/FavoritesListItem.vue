<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useFavoritesStore } from 'stores/favorites';

interface Props {
  id: number;
  programmId: number;
  name: string;
  imageUrl: string;
}

defineProps<Props>();

const favoritesStore = useFavoritesStore();

const router = useRouter();
</script>
<template>
  <div class="col-3">
    <q-card class="my-card" flat bordered>
      <q-img height="200px" class="col-5" :src="imageUrl">
        <div
          class="text-subtitle2 absolute-top text-right"
          style="background-color: inherit"
        >
          <q-btn
            icon="mdi-close"
            round
            color="primary"
            @click="favoritesStore.removeInFavorites(programmId)"
          />
        </div>
        <div
          class="absolute-bottom text-subtitle1 text-left cursor-pointer"
          @click="router.push(`/channel/${id}`)"
        >
          {{ name }}
        </div>
      </q-img>
    </q-card>
  </div>
</template>
