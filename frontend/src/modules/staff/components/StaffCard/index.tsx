import React, { FC } from 'react';

import Link from 'next/link';

import Divider from 'common/components/Divider';
import { STATIC_STAFF_ID_LINK } from 'common/constants/links';

import { Container, Cover, Name, Body, StyledAnchor } from './styled';
import { StaffCardProps } from './types';

const DIVIDER_MARGIN = '6px';

const StaffCard: FC<StaffCardProps> = ({ staff }) => {
  return (
    <Link href={{ pathname: STATIC_STAFF_ID_LINK, query: { id: staff.id } }}>
      <Container>
        <StyledAnchor>
          <Cover src={staff.imageUrl} />
        </StyledAnchor>
        <Body>
          <StyledAnchor>
            <Name>{staff.firstname.th}</Name>
            <Name>{staff.lastname.th}</Name>
          </StyledAnchor>
          <div>{staff.academicRank}</div>
          <div>อาจารย์</div>
          <Divider marginTop={DIVIDER_MARGIN} marginBottom={DIVIDER_MARGIN} />
          <div>{staff.phone}</div>
          <div>{staff.email}</div>
        </Body>
      </Container>
    </Link>
  );
};

export default StaffCard;
