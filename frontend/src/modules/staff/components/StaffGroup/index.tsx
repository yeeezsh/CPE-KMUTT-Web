import { FC } from 'react';

import Divider from 'common/components/Divider';
import Heading from 'common/components/Heading';
import colors from 'common/constants/colors';

import StaffCard from 'modules/staff/components/StaffCard';

import { Content, StyledContainer } from './styled';
import { StaffGroupProps } from './types';

const StaffGroup: FC<StaffGroupProps> = ({ title, staffs }) => {
  return (
    <StyledContainer>
      <Heading color={colors.PRIMARY_COLOR} variant="h2">
        {title}
      </Heading>
      <Divider marginTop="-2px" marginBottom="20px" />
      <Content>
        {staffs.map((staff, index) => (
          <StaffCard key={index} staff={staff} />
        ))}
      </Content>
    </StyledContainer>
  );
};

export default StaffGroup;
