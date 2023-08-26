import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';

//TODO:// refactor with news/home
export const BrowseProgramRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1em;

  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    display: flex;
    flex-wrap: wrap;
    gap: 0em;
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
