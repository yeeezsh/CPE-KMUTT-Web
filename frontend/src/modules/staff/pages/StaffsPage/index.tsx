import { ChangeEvent, FC, useMemo, useState } from 'react';

import Container from 'common/components/Container';
import Header from 'common/components/Header';
import CommonLayout from 'common/components/Layouts/CommonLayout';
import { GetStaffsQuery } from 'common/generated/generated-types';
import baseUrl from 'common/utils/baseUrl';
import { ImageStrapiUrl } from 'common/utils/urls';

import SearchBar from 'modules/staff/components/SearchBar';
import StaffGroup from 'modules/staff/components/StaffGroup';
import MOCK_STAFFS from 'modules/staff/mocks/staffs';
import { Staff, StaffGroups } from 'modules/staff/types';

import { BREADCRUMB } from './constants';
import { SearchBarContainer } from './styled';

const HEADER_BG_IMAGE = baseUrl('/images/staff_bg_header.jpg');

//TODO: refactor to hooks
function staffMapping(data: GetStaffsQuery): StaffGroups[] {
  const groups = data.staffsConnection?.groupBy?.academic_position?.map((e) => e?.key) as
    | string[]
    | undefined;
  const staffs = data.staffs?.map(
    (s) =>
      ({
        id: s?.id,
        title: s?.title,
        fullTitle: s?.full_title,
        name: s?.name,
        imageUrl: ImageStrapiUrl(s?.profile_image?.url || ''),
        academicPosition: s?.academic_position,
        phone: s?.phone_number,
        email: s?.email,
      } as Staff),
  );
  const mappedGroup = groups?.map((g) => ({
    title: g,
    staffs: staffs?.filter((s) => s?.academicPosition === g),
  })) as StaffGroups[];
  return mappedGroup;
}

const StaffsPage: FC<{ data: GetStaffsQuery }> = ({ data }) => {
  const [search, setSearch] = useState('');

  // FIXME: Remove hard code and move code to hooks
  // const staffs = useStaff();
  const staffs: Staff[] = MOCK_STAFFS;

  // FIXME: broke search
  const filteredStaffs = useMemo(
    () => staffs.filter((staff) => !search || staff.name.includes(search)),
    [search],
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const groupStaffs = staffMapping(data);

  return (
    <>
      <CommonLayout
        navigate={BREADCRUMB}
        Header={
          <Header
            title="บุคลากร"
            subtitle="Our Staffs"
            variant="2-col"
            backgroundImage={HEADER_BG_IMAGE}
          />
        }
        withFaqBanner>
        <Container>
          <SearchBarContainer>
            <SearchBar onChange={handleSearch} value={search} />
          </SearchBarContainer>
          {groupStaffs &&
            groupStaffs.map((g) => (
              <StaffGroup key={g.title} title={g.title} staffs={g.staffs} />
            ))}
        </Container>
      </CommonLayout>
    </>
  );
};

export default StaffsPage;
