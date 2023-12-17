import { Programm } from './programm';

export type Shedule = {
  programm: Programm;
  times: string[];
};

export type SheduleItem = {
  date: string;
  shedules: Shedule[];
};
