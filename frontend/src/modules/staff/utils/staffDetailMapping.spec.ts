import { GetStaffQuery } from 'common/generated/generated-types';

import { Room, Subject } from 'modules/staff/types';
import { staffDetailMapping } from 'modules/staff/utils/staffDetailMapping';

const MOCK_API: GetStaffQuery = {
  staffs: [
    {
      id: '634c1e85c9888d00376edb02',
      title: 'ผศ',
      full_title: 'ผู้ช่วยศาสตราจารย์',
      name: 'ชื่อจริง นามสกุล',
      academic_position: 'อาจารย์',
      phone_number: '0910000000',
      email: 'mail@mail.com',
      rooms: [
        {
          room_id: 'CPE1113',
          title: 'ห้องพัก',
        },
      ],
      profile_image: {
        url: '/files/test.png',
      },
      subjects: [
        {
          id: '634c2d77dbb3bf000eb807d4',
          subject_id: 'CPE101',
          title: 'Computer Programming',
        },
      ],
      info: '<ul>\n<li>info</li>\n<li>info</li>\n<li>info</li>\n</ul>',
      research:
        '<ul>\n<li>research</li>\n<li>research</li>\n<li>research</li>\n<li>&nbsp;</li>\n</ul>',
    },
  ],
};

const EXPECTED_SUBJECT: Subject[] = [
  { subjectId: 'CPE101', title: 'Computer Programming' },
];

const EXPECTED_ROOMS: Room[] = [{ roomId: 'CPE1113', title: 'ห้องพัก' }];
describe('staffDetailMapping test', () => {
  it('Should mapping correctly', () => {
    const testSubject = staffDetailMapping(MOCK_API);

    expect(typeof testSubject.info).toEqual('object');
    expect(typeof testSubject.research).toEqual('object');

    expect(testSubject.imageUrl).toEqual('http://localhost:1337/files/test.png');
    expect(testSubject.subjects).toEqual(EXPECTED_SUBJECT);
    expect(testSubject.rooms).toEqual(EXPECTED_ROOMS);
  });
});
