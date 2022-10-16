import { ChangeEvent, useMemo, useState } from 'react';

import { GetStaffsQuery } from 'common/generated/generated-types';

import { StaffGroups } from 'modules/staff/types';
import { staffMapping } from 'modules/staff/utils/staffMapping';

export type UseStaffs = {
  filtered: StaffGroups[];
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useStaffs = (data: GetStaffsQuery): UseStaffs => {
  const groupStaffs = staffMapping(data);
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () =>
      groupStaffs
        .filter((g) =>
          g.staffs.some((s) =>
            s.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
          ),
        )
        .map((g) => ({
          ...g,
          staffs: g.staffs.filter((s) =>
            s.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
          ),
        })),
    [search],
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return {
    filtered,
    search,
    handleSearch,
  };
};

export default useStaffs;
