import { STATIC_ABOUT_US_LINK, STATIC_CONTACT_US } from 'common/constants/links';

import { MenuItem, MenuType, SubMenu } from './types';

export const NAVBAR_MENU: MenuItem[] = [
  {
    key: '1',
    label: 'ปริญญาตรี',
    types: [MenuType.Desktop, MenuType.Mobile],
    subMenu: [
      {
        key: '1',
        label: 'หลักสูตรปกติ',
        link: '/#',
      },
      {
        key: '2',
        label: 'หลักสูตรนานาชาติ',
        link: '/#',
      },
      {
        key: '3',
        label: 'หลักสูตรวิทยาศาสตร์สุขภาพ',
        link: '/#',
      },
      {
        key: '4',
        label: 'หลักสูตร Residental College',
        link: '/#',
      },
    ],
    picture: 'https://cpe.kmutt.ac.th/uploadFile/facebook-share-cover.jpg',
  },
  {
    key: '2',
    label: 'บัณฑิตศึกษา',
    types: [MenuType.Desktop, MenuType.Mobile],

    subMenu: [
      {
        key: '1',
        label: 'หลักสูตรมหาบัณฑิต',
        link: '/#',
      },
      {
        key: '2',
        label: 'หลักสูตรดุษฎีบัณฑิต',
        link: '/#',
      },
    ],
    picture: 'https://cpe.kmutt.ac.th/uploadFile/facebook-share-cover.jpg',
  },
  {
    key: '3',
    label: 'ทุนการศึกษา',
    types: [MenuType.Desktop, MenuType.Mobile],
    subMenu: [
      {
        key: '1',
        label: 'ทุนภาควิชา',
        link: '/#',
      },

      {
        key: '2',
        label: 'ทุนเพชรพระจอมเกล้า',
        link: '/#',
      },
      {
        key: '3',
        label: 'ทุน คปก.',
        link: '/#',
      },
      {
        key: '4',
        label: 'ทุนต่างประเทศ',
        link: '/#',
      },
    ],
    picture: 'https://cpe.kmutt.ac.th/uploadFile/facebook-share-cover.jpg',
  },
  {
    key: '4',
    label: 'การรับเข้าศึกษา',
    types: [MenuType.Desktop, MenuType.Mobile],
    subMenu: [
      {
        key: '1',
        label: 'รับตรง (Active Recruitment)',
        link: '/#',
      },
      {
        key: '2',
        label: 'รับส่วนกลาง',
        link: '/#',
      },
      {
        key: '3',
        label: 'โครงการพิเศษ',
        link: '/#',
      },
    ],
    picture: 'https://cpe.kmutt.ac.th/uploadFile/facebook-share-cover.jpg',
  },
  {
    key: '5',
    label: 'เกี่ยวกับเรา',
    types: [MenuType.Desktop, MenuType.Mobile],
    subMenu: [
      {
        key: '1',
        label: 'ภาควิชา',
        link: STATIC_ABOUT_US_LINK,
      },
      {
        key: '2',
        label: 'บุคลากร',
        link: STATIC_ABOUT_US_LINK,
      },
      {
        key: '3',
        label: 'นักศึกษา',
        link: STATIC_ABOUT_US_LINK,
      },
      {
        key: '4',
        label: 'ความเป็นนานาชาติ',
        link: STATIC_ABOUT_US_LINK,
      },
    ],
    picture: 'https://cpe.kmutt.ac.th/uploadFile/facebook-share-cover.jpg',
  },
];

export const STUDENT: SubMenu[] = [
  { key: '1', label: 'ปฏิทินการศึกษา' },
  { key: '2', label: 'ตารางเรียน / ตารางสอบ' },
  { key: '3', label: 'เอกสารสำหรับนักศึกษา' },
  { key: '4', label: 'LEB2' },
  { key: '5', label: 'NewACIS' },
  { key: '6', label: 'สมุดติดต่อภายในฯ' },
];

export const STAFF: SubMenu[] = [
  { key: '1', label: 'WEBMAIL' },
  { key: '2', label: 'INTRANET' },
  { key: '3', label: 'สมุดโทรศัพท์ มจธ.' },
  { key: '4', label: 'ค้นหาบุคคลากรและองค์กร มจธ.' },
  { key: '6', label: 'ข่าวสาร' },
  { key: '7', label: 'สหกรณ์ออมทรัพย์ มจธ.' },
  { key: '8', label: 'สมาคมศิษย์เก่า' },
  { key: '9', label: 'หอสมุด' },
  { key: '10', label: 'สำนักคอมพิวเตอร์' },
  { key: '11', label: 'ผู้ดูแลระบบเว็บไซต์' },
];

export const NAVBAR_SECONDARY_MENU: SubMenu[] = [
  { key: 'secondary-1', label: 'สำหรับนักศึกษาปัจจุบัน', subMenu: STUDENT },
  { key: 'secondary-2', label: 'สำหรับบุคลากร', subMenu: STAFF },
  { key: 'secondary-3', label: 'ดาวน์โหลด', link: '#' },
  { key: 'secondary-4', label: 'ติดต่อเรา', link: STATIC_CONTACT_US },
];
