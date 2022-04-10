import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';

export const BadgeListContainer = styled.div`
  background: #f5f5f5;
`;

export const BadgeList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: 'Kanit';
  background: #f5f5f5;
  margin: 65px 0;
`;

export const Badge = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BadgeIcon = styled.img`
  margin: 35px 0;
  width: 90px;
  height: 90px;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    width: 60px;
    height: 60px;
    margin: 20px 0;
  }
`;

export const BadgeName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    font-size: 12px;
  }
`;
