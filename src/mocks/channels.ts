import {
  Programm1,
  Programm2,
  Programm3,
  Programm4,
  Programm5,
  Programm6,
  Programm7,
  Programm8,
  Programm9,
  Programm10,
  Programm11,
  Programm12,
  Programm13,
  Programm14,
  Programm15,
  Programm16,
  Programm17,
} from './programms';

import {
  Shedule1,
  Shedule2,
  Shedule3,
  Shedule4,
  Shedule5,
  Shedule6,
  Shedule7,
  Shedule8,
  Shedule9,
  Shedule10,
  Shedule11,
  Shedule12,
  Shedule13,
  Shedule14,
  Shedule15,
  Shedule16,
  Shedule17,
} from './shedule';

export default [
  {
    id: 1,
    name: 'Первый канал',
    icopath:
      'https://i.pinimg.com/564x/7f/bb/71/7fbb711e05d02031d07f52cab927ff8a.jpg',
    liveurl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    programms: [Programm1, Programm3, Programm2],
    programm: Programm1,
    shedules: [
      {
        date: '17.12.2023',
        shedules: [Shedule1, Shedule3, Shedule2],
      },
      {
        date: '18.12.2023',
        shedules: [Shedule3],
      },
      {
        date: '19.12.2023',
        shedules: [Shedule2],
      },
      {
        date: '20.12.2023',
        shedules: [Shedule1],
      },
      {
        date: '21.12.2023',
        shedules: [Shedule3, Shedule2],
      },
      {
        date: '22.12.2023',
        shedules: [Shedule3, Shedule1],
      },
      {
        date: '23.12.2023',
        shedules: [Shedule1],
      },
    ],
  },
  {
    id: 2,
    name: 'СТС',
    icopath:
      'https://i.pinimg.com/564x/f4/22/e6/f422e67774bed0580d0bb82cfb31ca6c.jpg',
    liveurl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    programms: [Programm3, Programm4, Programm5],
    programm: Programm3,
    shedules: [
      {
        date: '17.12.2023',
        shedules: [Shedule3, Shedule4, Shedule5],
      },
      {
        date: '18.12.2023',
        shedules: [Shedule3, Shedule4],
      },
      {
        date: '19.12.2023',
        shedules: [Shedule4],
      },
      {
        date: '20.12.2023',
        shedules: [Shedule3],
      },
      {
        date: '21.12.2023',
        shedules: [Shedule5, Shedule4],
      },
      {
        date: '22.12.2023',
        shedules: [Shedule3, Shedule4],
      },
      {
        date: '23.12.2023',
        shedules: [Shedule5],
      },
      {
        date: '24.12.2023',
        shedules: [Shedule3],
      },
    ],
  },
  {
    id: 3,
    name: 'МузТВ',
    icopath:
      'data:image/jpeg;base64,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',
    liveurl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    programms: [Programm7, Programm8, Programm9],
    programm: Programm7,
    shedules: [
      {
        date: '17.12.2023',
        shedules: [Shedule7, Shedule8, Shedule9],
      },
      {
        date: '18.12.2023',
        shedules: [Shedule8, Shedule9],
      },
      {
        date: '19.12.2023',
        shedules: [Shedule7],
      },
      {
        date: '20.12.2023',
        shedules: [Shedule7, Shedule9],
      },
      {
        date: '21.12.2023',
        shedules: [Shedule8, Shedule9],
      },
      {
        date: '22.12.2023',
        shedules: [Shedule9],
      },
      {
        date: '23.12.2023',
        shedules: [Shedule9, Shedule7],
      },
    ],
  },
  {
    id: 4,
    name: 'РЕН ТВ',
    icopath:
      'https://i.pinimg.com/564x/90/1e/ee/901eee32de51414eb5076a1cfd868fa7.jpg',
    liveurl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    programms: [Programm10, Programm11, Programm12],
    programm: Programm10,
    shedules: [
      {
        date: '17.12.2023',
        shedules: [Shedule10, Shedule11, Shedule12],
      },
      {
        date: '18.12.2023',
        shedules: [Shedule11, Shedule10],
      },
      {
        date: '19.12.2023',
        shedules: [Shedule11],
      },
      {
        date: '20.12.2023',
        shedules: [Shedule10, Shedule11],
      },
      {
        date: '21.12.2023',
        shedules: [Shedule10, Shedule12],
      },
      {
        date: '22.12.2023',
        shedules: [Shedule12],
      },
      {
        date: '23.12.2023',
        shedules: [Shedule10],
      },
    ],
  },
  {
    id: 5,
    name: 'Карусель',
    icopath:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Karusel_tv_logo.svg/2560px-Karusel_tv_logo.svg.png',
    liveurl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    programms: [Programm14, Programm3, Programm15],
    programm: Programm15,
    shedules: [
      {
        date: '17.12.2023',
        shedules: [Shedule14, Shedule3, Shedule15],
      },
      {
        date: '18.12.2023',
        shedules: [Shedule3, Shedule15],
      },
      {
        date: '19.12.2023',
        shedules: [Shedule14, Shedule15],
      },
      {
        date: '20.12.2023',
        shedules: [Shedule14],
      },
      {
        date: '21.12.2023',
        shedules: [Shedule15],
      },
      {
        date: '22.12.2023',
        shedules: [Shedule3, Shedule14],
      },
      {
        date: '23.12.2023',
        shedules: [Shedule3],
      },
    ],
  },
  {
    id: 6,
    name: 'ТНТ',
    icopath:
      'https://i.pinimg.com/564x/07/6c/1b/076c1b7bff8b499048be9b3994f6df72.jpg',
    liveurl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    programms: [Programm16, Programm6, Programm13, Programm1],
    programm: Programm13,
    shedules: [
      {
        date: '17.12.2023',
        shedules: [Shedule16, Shedule13, Shedule1],
      },
      {
        date: '18.12.2023',
        shedules: [Shedule16, Shedule13],
      },
      {
        date: '19.12.2023',
        shedules: [Shedule1],
      },
      {
        date: '20.12.2023',
        shedules: [Shedule16, Shedule1],
      },
      {
        date: '21.12.2023',
        shedules: [Shedule1, Shedule13],
      },
      {
        date: '22.12.2023',
        shedules: [Shedule1],
      },
      {
        date: '23.12.2023',
        shedules: [Shedule16],
      },
    ],
  },
];
