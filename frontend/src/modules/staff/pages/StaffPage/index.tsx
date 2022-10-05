import { FC } from 'react';

import { useRouter } from 'next/router';

import { GetServerSideProps } from 'next';

import Header from 'common/components/Header';
import CommonLayout from 'common/components/Layouts/CommonLayout';
import baseUrl from 'common/utils/baseUrl';

import BackSection from 'modules/staff/components/BackSection';
import StaffContactSection from 'modules/staff/components/StaffContactSection';
import MOCK_STAFFS from 'modules/staff/mocks/staffs';
import { BREADCRUMB } from 'modules/staff/pages/StaffsPage/constants';
import { Staff } from 'modules/staff/types';

import { StyledContainer } from './styled';

const HEADER_BG_IMAGE = baseUrl('/images/staff_bg_header.jpg');

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const staff = MOCK_STAFFS.find((staff) => staff.id === params?.id);

  return {
    props: { staff },
  };
};

const StaffPage: FC<{ staff: Staff }> = ({ staff }) => {
  const router = useRouter();
  const PageBreadcrumb = [
    ...BREADCRUMB,
    {
      title: `${staff.name}`,
      link: router.asPath,
    },
  ];

  return (
    <>
      <CommonLayout
        navigate={PageBreadcrumb}
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
