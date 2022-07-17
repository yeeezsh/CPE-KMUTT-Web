import { FC } from 'react';

import { useRouter } from 'next/router';

import Container from 'common/components/Container';
import Header from 'common/components/Header';
import CommonLayout from 'common/components/Layouts/CommonLayout';
import baseUrl from 'common/utils/baseUrl';

import StaffContactSection from 'modules/staff/components/StaffContactSection';
import MOCK_STAFFS from 'modules/staff/mocks/staffs';

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
        <Container>{staff && <StaffContactSection staff={staff} />}</Container>
      </CommonLayout>
    </>
  );
};

export default StaffPage;
