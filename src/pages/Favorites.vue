<script setup lang="ts">
import { ref } from 'vue';

import ChannelListItem from 'components/favorites/FavoritesList.vue';

import { useFavoritesStore } from 'stores/favorites';

import { Channel } from 'src/types/channel';

const favoritesStore = useFavoritesStore();

const favorites = ref<Channel[]>([]);

favoritesStore.getFavorites().then((res) => {
  favorites.value = res;
});
</script>
<template>
  <ChannelListItem :items="favorites" />
</template>
