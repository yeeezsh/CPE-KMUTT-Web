import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';

export const StaticStyle = styled.div`
  display: flex;
  font-family: 'Kanit', sans-serif;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 460px;
  width: 100%;
  margin: auto;
`;

export const StaticBody = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    width: 100%;
    padding: 20px;
    align-items: center;
  }
`;

export const StaticHeader = styled.div`
  display: flex;
  font-size: 36px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 10px;
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    font-size: 24px;
    text-align: center;
  }
`;

export const StaticContent = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 40px;
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    text-align: center;
  }
`;

export const ButtonStyled = styled.div`
  margin-bottom: 10px;
`;
