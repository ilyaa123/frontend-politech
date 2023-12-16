import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Channel } from 'src/types/channel';
import { ref } from 'vue';

export const useChannelsStore = defineStore('channels', () => {
  const channels = ref<Channel[]>([
    {
      id: 1,
      name: 'Первый канал',
      icopath: 'https://cdn.quasar.dev/img/mountains.jpg',
      liveurl: 'https://www.youtube.com/live/t9Ilev-uk4w?si=SKvLJSQrr2a8TnR1',
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

  const getChannels = async () => {
    return api.get<{ channels: Channel[] }>('').then((res) => {
      channels.value = res.data.channels;
      return res.data;
    });
  };

  return {
    channels,
    getChannels,
  };
});
