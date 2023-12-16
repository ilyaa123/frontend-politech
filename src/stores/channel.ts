import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

import { Genre } from 'src/types/genres';
import { Channel } from 'src/types/channel';

import channelsMocks from 'src/mocks/channels';

export const useChannelsStore = defineStore('channels', () => {
  const channels = ref<Channel[]>(channelsMocks);

  const popularityChannels = ref<Channel[]>([
    {
      id: 1,
      name: 'Первый канал',
      icopath: 'https://cdn.quasar.dev/img/mountains.jpg',
      liveurl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
      programm: {
        id: 1,
        channelId: 1,
        programm_name: 'test1',
        description:
          'Актуальные сюжеты на злобу дня, отличный юмор и море позитива! Короткие анекдотические ситуации разыгрывают шесть блестящих комедийных актеров: Галина Данилова, Ирина Медведева, Эдуард Радзюкевич, Андрей Кайков, Федор Добронравов и Сергей Дорогов. Впрограмме в гротескном виде представлена повседневная жизнь обычного россиянина.',
        genres: [
          {
            idprogram: 1,
            genre: 'Драма',
          },
          {
            idprogram: 2,
            genre: 'Комедия',
          },
        ],
      },
    },
  ]);

  const genres = ref<Genre[]>([
    {
      idprogram: 1,
      genre: 'Драма',
    },
    {
      idprogram: 2,
      genre: 'Комедия',
    },
    {
      idprogram: 3,
      genre: 'Романтика',
    },
    {
      idprogram: 4,
      genre: 'Детектив',
    },
  ]);

  const getChannels = async () => {
    return api.get<{ channels: Channel[] }>('').then((res) => {
      channels.value = res.data.channels;
      return res.data;
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
    getChannels,
    searchChannels,
  };
});
