import channelsMocks from 'src/mocks/channels';

import { Channel } from 'src/types/channel';

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

export const getPopularityChannel = async () => {
  return new Promise<{ data: Channel[] }>((resolve) => {
    const data = channelsMocks
      .sort(
        (a, b) =>
          Math.max(...a.programms.map((programm) => programm.rating)) -
          Math.max(...b.programms.map((programm) => programm.rating))
      )
      .slice(0, 3);
    resolve({ data });
  });
};
