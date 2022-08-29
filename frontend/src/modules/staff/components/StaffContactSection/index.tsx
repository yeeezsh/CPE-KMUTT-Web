import { FC } from 'react';

import {
  AcademicRank,
  ContactArea,
  Container,
  Name,
  NameArea,
  ProfileImage,
  StyledTable,
} from './styled';
import { StaffContactSectionProps } from './types';

const StaffContactSection: FC<StaffContactSectionProps> = ({ staff }) => {
  return (
    <Container>
      <ProfileImage />
      <NameArea>
        <Name variant="h1">
          {staff.firstname.th} {staff.lastname.th}
        </Name>
        <AcademicRank>{staff.academicRank}</AcademicRank>
      </NameArea>
      <ContactArea>
        <StyledTable>
          <tr>
            <td>โทรศัพท์:</td>
            <td>{staff.phone}</td>
          </tr>
          <tr>
            <td>อีเมล:</td>
            <td>
              <a href={`mailto:${staff.email}`}>{staff.email}</a>
            </td>
          </tr>
        </StyledTable>
      </ContactArea>
    </Container>
  );
};

export default StaffContactSection;
