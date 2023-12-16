import { Programm } from './programm';

export type Channel = {
  id: number;
  name: string;
  icopath: string;
  liveurl: string;
  programm: Programm;
};
