import { ChangeEvent } from 'react';

import { act, renderHook } from '@testing-library/react-hooks';

import { GetStaffsQuery } from 'common/generated/generated-types';

import useStaffs from 'modules/staff/hooks/useStaffs';

const MOCK_API: GetStaffsQuery = {
  staffs: [
    {
      id: '633d1ae4ab755900ceb3faa8',
      title: 'ผศ',
      full_title: 'ผู้ช่วยศาสตราจารย์',
      name: 'AA BB',
      academic_position: 'อาจารย์',
      academic_position_group: 'ผู้บริหาร',
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
      name: 'AA CC',
      academic_position: 'ผู้บริหาร',
      academic_position_group: 'ผู้บริหาร',
      phone_number: '0910000002',
      email: null,
      profile_image: {
        url: '/files/sanan 1.png',
      },
    },
  ],
  staffsConnection: {
    groupBy: {
      academic_position_group: [
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

describe('useStaffs Test', () => {
  it('should able to handle search correctly', () => {
    const { result } = renderHook(() => useStaffs(MOCK_API));

    function mockChangeEvent(value: string): ChangeEvent<HTMLInputElement> {
      return ({ target: { value: value } } as unknown) as ChangeEvent<HTMLInputElement>;
    }

    expect(result.current.filtered).toHaveLength(1);
    expect(result.current.search).toBe('');

    act(() => {
      result.current.handleSearch(mockChangeEvent('AA'));
    });
    expect(result.current.filtered[0].staffs).toHaveLength(2);

    act(() => {
      result.current.handleSearch(mockChangeEvent('AA BB'));
    });
    expect(result.current.filtered[0].staffs).toHaveLength(1);

    act(() => {
      result.current.handleSearch(mockChangeEvent('aa'));
    });
    expect(result.current.filtered[0].staffs).toHaveLength(2);
  });
});
