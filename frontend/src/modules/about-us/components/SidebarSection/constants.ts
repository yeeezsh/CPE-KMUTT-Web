import { STATIC_STAFFS } from 'common/constants/links';

export const SIDEBAR_ITEMS = [
  {
    title: `เกี่ยวกับภาควิชาฯ`,
    item: [
      {
        title: 'ประวัติภาควิชาฯ',
        url: '/about-us/history',
        key: 'history',
      },
      {
        title: 'วิสัยทัศน์และพันธกิจ',
        url: '/about-us/vision',
        key: 'vision',
      },
      {
        title: 'พื้นที่และงานบริการ',
        url: '/about-us/service',
        key: 'service',
      },
    ],
  },
  {
    title: `บุคคลากร`,
    item: [
      {
        title: 'ผู้บริหาร',
        url: STATIC_STAFFS,
        key: 'manager',
      },
      {
        title: 'อาจารย์',
        url: STATIC_STAFFS,
        key: 'teacher',
      },
      {
        title: 'เจ้าหน้าที่',
        url: STATIC_STAFFS,
        key: 'officer',
      },
    ],
  },
  {
    title: `นักศึกษา`,
    item: [
      {
        title: 'กิจกรรมนักศึกษา',
        url: '/about-us/',
        key: 'student',
      },
      {
        title: 'ชีวิตในรั้วฯ',
        url: '/about-us/',
        key: 'life',
      },
    ],
  },
];
