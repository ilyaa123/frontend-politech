import { defineStore } from 'pinia';

import channelsMocks from 'src/mocks/channels';
import { Channel } from 'src/types/channel';

import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<number[]>([]);

  const addToFavorites = (id_channel: number) => {
    favorites.value = [...favorites.value, id_channel];
  };

  const removeInFavorites = (id_channel: number) => {
    favorites.value = [...favorites.value].filter(
      (favorit) => favorit !== id_channel
    );
  };

  const getFavorites = async () => {
    return new Promise<Channel[]>((resolve) => {
      const res = channelsMocks.filter((item) =>
        favorites.value.includes(item.programm.id)
      );
      resolve(res);
    });
  };

  return {
    favorites,
    removeInFavorites,
    addToFavorites,
    getFavorites,
  };
});
