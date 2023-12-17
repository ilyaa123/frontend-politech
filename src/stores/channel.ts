import { defineStore } from 'pinia';
import { ref } from 'vue';

import { Genre } from 'src/types/genres';
import { Channel } from 'src/types/channel';

import channelsMocks from 'src/mocks/channels';
import genresMocks from 'src/mocks/genres';
import {
  getChannels,
  getChennel,
  getPopularityChannel,
  searchChannels,
} from 'src/api/channels';

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

  const search = async (value?: string) => {
    return searchChannels(value);
  };

  const getChannelItem = async (id: number) => {
    return getChennel(id).then((res) => {
      return res.data;
    });
  };

  return {
    genres,
    channels,
    popularityChannels,
    getChannelItem,
    fetchChannels,
    fetchPopularityChannels,
    search,
  };
});
