import { FC } from 'react';

import { useRouter } from 'next/router';

import Header from 'common/components/Header';
import CommonLayout from 'common/components/Layouts/CommonLayout';
import baseUrl from 'common/utils/baseUrl';

import BackSection from 'modules/staff/components/BackSection';
import StaffContactSection from 'modules/staff/components/StaffContactSection';
import MOCK_STAFFS from 'modules/staff/mocks/staffs';

import { StyledContainer } from './styled';

const HEADER_BG_IMAGE = baseUrl('/images/staff_bg_header.jpg');

const StaffPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const staff = MOCK_STAFFS.find((staff) => staff.id === id);

  return (
    <>
      <CommonLayout
        Header={
          <Header
            title="บุคลากร"
            subtitle="Our staffs"
            variant="2-col"
            backgroundImage={HEADER_BG_IMAGE}
          />
        }
        withFaqBanner>
        <StyledContainer>
          <BackSection />
          {staff && <StaffContactSection staff={staff} />}
        </StyledContainer>
      </CommonLayout>
    </>
  );
};

export default StaffPage;
