import { FC } from 'react';

import {
  Container,
  Header,
  Title,
  Content,
} from 'modules/staff/components/StaffCommonContactSection/styled';
import { StaffCommonContactSectionProps } from 'modules/staff/components/StaffCommonContactSection/types';

const StaffCommonSection: FC<StaffCommonContactSectionProps> = (props) => {
  return (
    <>
      <Container>
        <Header>
          <Title variant="h3">{props.header}</Title>
        </Header>
        <Content>{props.children}</Content>
      </Container>
    </>
  );
};

export default StaffCommonSection;
