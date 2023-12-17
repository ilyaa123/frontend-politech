import channelsMocks from 'src/mocks/channels';
import programmsMocks from 'src/mocks/programms';

import { Channel } from 'src/types/channel';
import { Programm } from 'src/types/programm';

interface getChannelsProps {
  genriesIds?: number[] | null;
}

export const getChannels = async (props: getChannelsProps) => {
  return new Promise<{ data: Channel[] }>((resolve) => {
    if (!props?.genriesIds) {
      resolve({
        data: channelsMocks,
      });
    } else {
      const data = channelsMocks.filter((channel) =>
        props.genriesIds?.every((genry) =>
          channel.programm.genres.find((item) => item.id === genry)
        )
      );
      resolve({
        data,
      });
    }
  });
};

export const getChennel = async (id: number) => {
  return new Promise<{ data: Channel }>((resolve, reject) => {
    const channel = channelsMocks.find((item) => item.id === id);
    if (!!channel) {
      resolve({ data: channel });
    } else {
      reject('Не найдено');
    }
  });
};

export const getPopularityChannel = async () => {
  return new Promise<{ data: Channel[] }>((resolve) => {
    const data = channelsMocks
      .sort(
        (a, b) =>
          Math.max(...a.programms.map((programm) => Number(programm.rating))) -
          Math.max(...b.programms.map((programm) => Number(programm.rating)))
      )
      .slice(0, 3);
    resolve({ data });
  });
};

export const searchChannels = async (value?: string) => {
  return new Promise<{ channels: Channel[]; programms: Programm[] }>(
    (resolve) => {
      const searchValue = value ? value.toLowerCase() : '';

      const channelItems = channelsMocks.filter((item) =>
        item.name.toLowerCase().includes(searchValue)
      );

      const programmsItems = programmsMocks.filter((item) => {
        item.programm_name.toLowerCase().includes(searchValue);
      });

      resolve({
        channels: channelItems,
        programms: programmsItems,
      });
    }
  );
};
