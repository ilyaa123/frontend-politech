import { defineStore } from 'pinia';
import { ref } from 'vue';

import { Genre } from 'src/types/genres';
import { Channel } from 'src/types/channel';

import channelsMocks from 'src/mocks/channels';
import genresMocks from 'src/mocks/genres';
import { getChannels, getPopularityChannel } from 'src/api/channels';

export const useChannelsStore = defineStore('channels', () => {
  const channels = ref<Channel[]>([]);

  const popularityChannels = ref<Channel[]>([]);

  const genres = ref<Genre[]>(genresMocks);

  const fetchChannels = async (data: { genriesIds?: number[] | null }) => {
    getChannels(data).then((res) => {
      channels.value = res.data;
    });
  };

  const fetchPopularityChannels = async () => {
    getPopularityChannel().then((res) => {
      popularityChannels.value = res.data;
    });
  };

  const searchChannels = async (value?: string) => {
    return new Promise<Channel[]>((resolve, reject) => {
      const resultItems = channelsMocks.filter((item) =>
        item.name.includes(value || '')
      );

      if (resultItems.length == 0) {
        reject('Not find');
      } else {
        resolve(resultItems);
      }
    });
  };

  return {
    genres,
    channels,
    popularityChannels,
    fetchChannels,
    fetchPopularityChannels,
    searchChannels,
  };
});
