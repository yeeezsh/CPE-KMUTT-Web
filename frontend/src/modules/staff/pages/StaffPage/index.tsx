import { FC } from 'react';

import Header from 'common/components/Header';
import CommonLayout from 'common/components/Layouts/CommonLayout';
import { GetStaffQuery } from 'common/generated/generated-types';
import baseUrl from 'common/utils/baseUrl';

import BackSection from 'modules/staff/components/BackSection';
import StaffCommonSection from 'modules/staff/components/StaffCommonContactSection';
import StaffContactSection from 'modules/staff/components/StaffContactSection';
import { StyledTable } from 'modules/staff/components/StaffContactSection/styled';
import useStaffDetail from 'modules/staff/hooks/useStaffDetail';
import { StaffDetail } from 'modules/staff/types';

import { StyledContainer } from './styled';

const HEADER_BG_IMAGE = baseUrl('/images/staff_bg_header.jpg');

const StaffPage: FC<{ data: GetStaffQuery }> = ({ data }) => {
  const { mappedStaff, pageBreadcrumb: PageBreadcrumb } = useStaffDetail(data);

  return (
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
        <StaffContactSection staff={mappedStaff} />
        <StaffInfo mappedStaff={mappedStaff} />
        <StaffSubjects mappedStaff={mappedStaff} />
        <StaffResearch mappedStaff={mappedStaff} />
      </StyledContainer>
    </CommonLayout>
  );
};

type CommonSectionProps = { mappedStaff: StaffDetail };

const StaffResearch: FC<CommonSectionProps> = ({ mappedStaff }) => (
  <StaffCommonSection header="งานวิจัย/หัวข้อที่สนใจ">
    {mappedStaff.info}
  </StaffCommonSection>
);

const StaffInfo: FC<CommonSectionProps> = ({ mappedStaff }) => (
  <StaffCommonSection header="ประวัติ">{mappedStaff.info}</StaffCommonSection>
);

const StaffSubjects: FC<CommonSectionProps> = ({ mappedStaff }) => (
  <StaffCommonSection header="วิชาที่สอน">
    <StyledTable>
      <tr>
        <td>รหัสวิชา</td>
        <td>ชื่อวิชา</td>
      </tr>
      {mappedStaff.subjects.map((s) => (
        <>
          <td>{s.subjectId}</td>
          <td>{s.title}</td>
        </>
      ))}
    </StyledTable>
  </StaffCommonSection>
);

export default StaffPage;
