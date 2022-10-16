import { StaffDetail } from 'modules/staff/types';

const MOCK_STAFF_DETAIL: StaffDetail = {
  id: '',
  title: 'ผศ',
  fullTitle: 'ผู้ช่วยศาสตราจารย์',
  name: 'ชื่อจริง นามสกุล',
  imageUrl: 'http://localhost:1337/files/test.png',
  academicPosition: 'อาจารย์',
  academicPositionGroup: '',
  phone: '0910000000',
  email: 'mail@mail.com',
  rooms: [{ roomId: 'CPE1113', title: 'ห้องพัก' }],
  info: <div />,
  research: <div />,
  subjects: [{ subjectId: 'CPE101', title: 'Computer Programming' }],
};

export default MOCK_STAFF_DETAIL;
