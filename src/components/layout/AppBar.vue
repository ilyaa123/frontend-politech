<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { useFavoritesStore } from 'stores/favorites';

const favoritesStore = useFavoritesStore();

const router = useRouter();

const search = ref('');
</script>
<template>
  <q-toolbar>
    <q-toolbar-title class="cursor-pointer" @click="router.push('/')">
      LimeTV
    </q-toolbar-title>
    <q-form class="q-mr-sm" @submit.prevent="router.push(`/search/${search}`)">
      <q-input
        v-model="search"
        color="white"
        label="Поиск"
        bottom-slots
        hide-bottom-space
        dense
        standout="bg-teal text-white"
      >
        <template v-slot:append>
          <q-icon
            name="mdi-magnify"
            class="cursor-pointer text-white"
            style="color: initial"
            @click="router.push(`/search/${search}`)"
          />
        </template>
      </q-input>
    </q-form>
    <q-btn
      flat
      dense
      color="white"
      round
      icon="mdi-heart"
      class="q-ml-md"
      @click="router.push('/favorites')"
    >
      <q-badge color="red" rounded floating>{{
        favoritesStore.favorites.length
      }}</q-badge>
    </q-btn>
  </q-toolbar>
</template>
