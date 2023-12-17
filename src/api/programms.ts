import programmsMocks from 'src/mocks/programms';

import { Programm } from 'src/types/programm';

export const getProgramms = async (id: number) => {
  return new Promise<{ data: Programm }>((resolve, reject) => {
    const programm = programmsMocks.find((item) => item.id === id);

    if (!!programm) {
      resolve({
        data: programm,
      });
    } else {
      reject('Не найдено');
    }
  });
};
