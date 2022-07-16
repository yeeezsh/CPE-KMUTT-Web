import { ChangeEvent, FC, useMemo, useState } from 'react';

import Container from 'common/components/Container';
import HeroLayout from 'common/components/Layouts/HeroLayout';
import baseUrl from 'common/utils/baseUrl';

import SearchBar from 'modules/staff/components/SearchBar';
import StaffGroup from 'modules/staff/components/StaffGroup';
import MOCK_STAFFS from 'modules/staff/mocks/staffs';
import { Staff } from 'modules/staff/types';

import { SearchBarContainer } from './styled';

const HEADER_BG_IMAGE = baseUrl('/images/staff_bg_header.jpg');

const StaffsPage: FC = () => {
  const [search, setSearch] = useState('');

  // FIXME: Remove hard code and move code to hooks
  // const staffs = useStaff();
  const staffs: Staff[] = MOCK_STAFFS;
  const filteredStaffs = useMemo(
    () =>
      staffs.filter(
        (staff) =>
          !search ||
          staff.firstname.th.includes(search) ||
          staff.firstname.en.includes(search) ||
          staff.lastname.th.includes(search) ||
          staff.lastname.en.includes(search),
      ),
    [search],
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <HeroLayout
        title="บุคลากร"
        subtitle="About Us"
        headerBackgroundImage={HEADER_BG_IMAGE}
        withFaqBanner>
        <Container>
          <SearchBarContainer>
            <SearchBar onChange={handleSearch} value={search} />
          </SearchBarContainer>
          {/* FIXME: Spilt group by role */}
          <StaffGroup title="อาจารย์" staffs={filteredStaffs} />
        </Container>
      </HeroLayout>
    </>
  );
};

export default StaffsPage;
