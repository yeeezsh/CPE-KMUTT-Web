import { renderHook } from '@testing-library/react-hooks';

import { CrumbProps } from 'common/components/Layouts/CommonLayout/types';
import { GetStaffQuery } from 'common/generated/generated-types';

import useStaffDetail from 'modules/staff/hooks/useStaffDetail';

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

const EXPECTED_BREADCRUMB: CrumbProps[] = [
  { link: '/', title: 'หนัาหลัก' },
  { link: '/about-us', title: 'เกี่ยวกับเรา' },
  { link: '/staffs', title: 'บุคคลากร' },
  { link: '', title: 'ชื่อจริง นามสกุล' },
];

describe('useStaffDetail Test', () => {
  it('should build pageBreadcrumb correctly', () => {
    const { result } = renderHook(() => useStaffDetail(MOCK_API));

    expect(result.current.pageBreadcrumb).toEqual(EXPECTED_BREADCRUMB);
  });
});
