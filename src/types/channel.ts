import { Programm } from './programm';
import { Shedule } from './shedule';

export type Channel = {
  id: number;
  name: string;
  icopath: string;
  liveurl: string;
  programm: Programm;
  programms: Programm[];
  shedules: Shedule[];
};
