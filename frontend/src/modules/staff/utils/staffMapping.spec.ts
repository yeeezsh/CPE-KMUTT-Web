import { GetStaffsQuery } from 'common/generated/generated-types';

import { Staff } from 'modules/staff/types';
import { staffMapping } from 'modules/staff/utils/staffMapping';

const MOCK_API: GetStaffsQuery = {
  staffs: [
    {
      id: '633d1ae4ab755900ceb3faa8',
      title: 'ผศ',
      full_title: 'ผู้ช่วยศาสตราจารย์',
      name: 'ดร พร',
      academic_position: 'อาจารย์',
      phone_number: '0910000000',
      email: 'kt@tk.com',
      profile_image: {
        url: '/files/sanan 1.png',
      },
    },
    {
      id: '633d1e57b48cef00f2fb441e',
      title: ' ผศ',
      full_title: 'ผู้ช่วยศาสตราจารย์',
      name: 'ดร พร',
      academic_position: 'ผู้บริหาร',
      phone_number: '0910000002',
      email: null,
      profile_image: {
        url: '/files/sanan 1.png',
      },
    },
  ],
  staffsConnection: {
    groupBy: {
      academic_position: [
        {
          key: 'อาจารย์',
        },
        {
          key: 'ผู้บริหาร',
        },
      ],
    },
  },
};

const EXPECT_STAFF_1: Staff = {
  id: '633d1ae4ab755900ceb3faa8',
  title: 'ผศ',
  fullTitle: 'ผู้ช่วยศาสตราจารย์',
  name: 'ดร พร',
  imageUrl: 'http://localhost:1337/files/sanan 1.png',
  academicPosition: 'อาจารย์',
  phone: '0910000000',
  email: 'kt@tk.com',
};

describe('staffMapping test', () => {
  it('Should mapping correctly', () => {
    const testSubject = staffMapping(MOCK_API);
    expect(testSubject[0].staffs[0]).toEqual(EXPECT_STAFF_1);
    expect(testSubject.length).toBe(
      MOCK_API.staffsConnection?.groupBy?.academic_position?.length,
    );
  });
});
