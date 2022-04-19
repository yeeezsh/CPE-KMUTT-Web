import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';
import COLORS from 'common/constants/colors';

export const FooterStyled = styled.div`
  display: flex;
  font-family: 'Kanit', sans-serif;
  height: 100%;
  width: 100%;
  margin: auto;
  padding: 25px 0;
  color: ${COLORS.GRAY_2};
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    flex-direction: column;
  }
`;

export const ContactContainer = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    flex-direction: column;
    padding: 0 25px 25px 25px;
    margin-bottom: 0px;
  }

  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    padding: 0 25px 25px 25px;
  }
`;

export const ContactHeader = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const ContactContent = styled.div`
  font-size: 14px;
`;

export const SiteMapContainer = styled.div`
  height: 325px;
  padding: 15px 0;
  margin: 25px 0;
  width: 1024px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column wrap;

  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    flex-direction: row;
    padding: 0 25px 25px 25px;
    margin-bottom: 0px;
    height: auto;
    flex-grow: 1;
  }
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    flex-direction: row;
    padding: 0 25px 25px 25px;
    margin-bottom: 0px;
    height: auto;
  }
`;

export const SiteMapSupContainer = styled.div`
  display: grid;
  height: fit-content;
  margin-bottom: 20px;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    padding: 0 5px;
    width: 50%;
  }
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    padding: 0 10px;
  }
`;

export const SiteMapHeader = styled.div`
  font-weight: 700;
  line-height: 25px;
`;

export const SiteMapLink = styled.a`
  line-height: 25px;
`;

export const HrLine = styled.hr`
  height: 0px;
  border: 1px solid #d0d0d0;
  width: 1024px;
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    width: 80%;
  }
`;

export const CopyRight = styled.div`
  font-size: 14px;
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    text-align: center;
  }
`;

export const CopyRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 25px;

  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    flex-direction: column;
    padding: 0 25px 25px 25px;
    margin-bottom: 0px;
  }

  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    padding: 0 25px 25px 25px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoLink = styled.a`
  font-size: 14px;
`;
