import styled from 'styled-components';
import COLORS from 'common/constants/colors';

export const FooterStyled = styled.div`
  display: flex;
  font-family: 'Kanit', sans-serif;
  height: 100%;
  width: 100%;
  margin: auto;
  padding: 25px 0;
  color: ${COLORS.GRAY_2};
`;

export const ContactContainer = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
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
`;

export const SiteMapSupContainer = styled.div`
  display: grid;
  height: fit-content;
  margin-bottom: 20px;
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
`;

export const CopyRight = styled.div`
  font-size: 14px;
`;

export const CopyRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 25px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoLink = styled.a`
  font-size: 14px;
`;
