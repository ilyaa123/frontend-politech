import { Genre } from './genres';

export type Programm = {
  id: number;
  programm_name: string;
  description: string;
  channelId: number;
  genres: Genre[];
};
