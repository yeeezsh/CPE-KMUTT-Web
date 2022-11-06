import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';
import COLORS from 'common/constants/colors';

export const BrowseNewsStyle = styled.div`
  display: block;
  font-family: 'Kanit', sans-serif;
  width: 100%;
  background-color: #fafafa;
`;

export const BrowseNewsRow = styled.div`
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

export const BrowseNewsSeeMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 40px 0;
`;

export const BrowsNewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 40px 190px;
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    flex-direction: column;
    justify-content: center;
    margin: 10px 10px;
  }
`;

export const AnnouceFAQ = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  padding-top: 32px;
`;

export const FAQButton = styled.div`
  margin: 32px 0;
`;

export const FAQContent = styled.div`
  color: ${COLORS.GRAY_2};
  font-size: 14px;
`;

export const FAQHeader = styled.div`
  color: ${COLORS.GRAY_1};
  font-weight: bold;
  font-size: 22px;
`;
