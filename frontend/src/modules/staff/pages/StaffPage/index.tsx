import { FC } from 'react';

import { useRouter } from 'next/router';

import Header from 'common/components/Header';
import CommonLayout from 'common/components/Layouts/CommonLayout';
import {
  GetStaffQuery,
  Staffs as GeneratedStaff,
} from 'common/generated/generated-types';
import baseUrl from 'common/utils/baseUrl';
import { ImageStrapiUrl } from 'common/utils/urls';

import BackSection from 'modules/staff/components/BackSection';
import StaffCommonSection from 'modules/staff/components/StaffCommonContactSection';
import StaffContactSection from 'modules/staff/components/StaffContactSection';
import { StyledTable } from 'modules/staff/components/StaffContactSection/styled';
import { BREADCRUMB } from 'modules/staff/pages/StaffsPage/constants';
import { Room, StaffDetail, Subject } from 'modules/staff/types';

import { StyledContainer } from './styled';

const HEADER_BG_IMAGE = baseUrl('/images/staff_bg_header.jpg');

const StaffPage: FC<{ data: GetStaffQuery }> = ({ data }) => {
  //TODO: refactor this to mapping
  const staff = data && data.staffs && ((data.staffs[0] as unknown) as GeneratedStaff);

  function mappingStaffDetail(staff?: GeneratedStaff | null): StaffDetail {
    return {
      id: staff?._id || '',
      title: staff?.title || '',
      fullTitle: staff?.full_title || '',
      name: staff?.name || '',
      imageUrl: ImageStrapiUrl(staff?.profile_image?.url || ''),
      academicPosition: staff?.academic_position || '',
      academicPositionGroup: staff?.academic_position_group || '',
      phone: staff?.phone_number || '',
      email: staff?.email || '',
      rooms:
        (staff?.rooms?.map((r) => ({ roomId: r?.room_id, title: r?.title })) as Room[]) ||
        [],
      info: <div dangerouslySetInnerHTML={{ __html: staff?.info || '' }} />,
      research: <div dangerouslySetInnerHTML={{ __html: staff?.research || '' }} />,
      subjects: staff?.subjects?.map((s) => ({
        subjectId: s?.subject_id,
        title: s?.title,
      })) as Subject[],
    };
  }

  const mappedStaff = mappingStaffDetail(staff);

  const router = useRouter();
  const PageBreadcrumb = [
    ...BREADCRUMB,
    {
      title: `${staff?.name || ''}`,
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
          {staff && <StaffContactSection staff={mappedStaff} />}
          <StaffCommonSection header="ประวัติ">{mappedStaff.info}</StaffCommonSection>

          {
            //TODO: refactor this to subject section
          }
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
          <StaffCommonSection header="งานวิจัย/หัวข้อที่สนใจ">
            {mappedStaff.info}
          </StaffCommonSection>
        </StyledContainer>
      </CommonLayout>
    </>
  );
};

export default StaffPage;
