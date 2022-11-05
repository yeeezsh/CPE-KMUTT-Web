import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';

//TODO:// refactor with news/home
export const BrowseProgramRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 16px;
  margin: 16px;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    row-gap: 0px;
  }
`;

export const Header = styled.div`
  margin-left: 16px;
  padding-bottom: 6px;
`;

export const BrowseProgramStyle = styled.div`
  display: block;
  font-family: 'Kanit', sans-serif;
  width: 100%;
  background-color: #fafafa;
  padding: 10px;
  padding-top: 24px;
`;
