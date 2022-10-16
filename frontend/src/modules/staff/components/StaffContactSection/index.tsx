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
      <ProfileImage src={staff.imageUrl} />
      <NameArea>
        <Name variant="h1">{staff.name}</Name>
        <AcademicRank>{staff.academicPosition}</AcademicRank>
      </NameArea>
      <ContactArea>
        <StyledTable>
          <tr>
            <td>ห้องพัก:</td>
            <td>{staff.rooms.map((r) => `${r.roomId} ${r.title}`)}</td>
          </tr>
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
