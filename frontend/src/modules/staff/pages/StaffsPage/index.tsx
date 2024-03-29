import { FC } from 'react';

import Container from 'common/components/Container';
import Header from 'common/components/Header';
import CommonLayout from 'common/components/Layouts/CommonLayout';
import { GetStaffsQuery } from 'common/generated/generated-types';

import SearchBar from 'modules/staff/components/SearchBar';
import StaffGroup from 'modules/staff/components/StaffGroup';
import useStaffs from 'modules/staff/hooks/useStaffs';

import { BREADCRUMB, HEADER_BG_IMAGE } from './constants';
import { SearchBarContainer } from './styled';

const StaffsPage: FC<{ data: GetStaffsQuery }> = ({ data }) => {
  const { filtered, search, handleSearch } = useStaffs(data);

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
          {filtered &&
            filtered.map((g) => (
              <StaffGroup key={g.title} title={g.title} staffs={g.staffs} />
            ))}
        </Container>
      </CommonLayout>
    </>
  );
};

export default StaffsPage;
