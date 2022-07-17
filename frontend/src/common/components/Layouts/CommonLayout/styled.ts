import styled from 'styled-components';

import COLORS from 'common/constants/colors';

import { NAVBAR_HEIGHT } from 'modules/root/components/Navbar/styled';
interface CommonWrapperHeaderProps {
  $backgroundImage: string;
}

export const CommonLayoutStyle = styled.div`
  display: block;
  font-family: 'Kanit', sans-serif;
  background-color: #fafafa;
  width: 100%;
  margin: auto;
  margin-top: ${NAVBAR_HEIGHT};
  .ant-breadcrumb {
    display: flex;
    padding: 10px;
  }

  .ant-breadcrumb > span:last-child a {
    color: ${COLORS.GRAY_2};
    font-weight: bold;
  }
`;

export const CommonWrapperHeader = styled.div<CommonWrapperHeaderProps>`
  background-repeat: no-repeat;
  background-position: right;
  background-image: ${(props) => `url(${props.$backgroundImage});`};
  height: 150px;
  display: block;
`;

export const CommonWrapperCanvas = styled.div`
  background: linear-gradient(90deg, #4a60ac 60%, rgba(74, 96, 172, 0) 100%);
  height: 150px;
`;

export const CommonWrapperRow = styled.div`
  display: flex;
  align-items: center;
  &.center {
    justify-content: center;
  }

  &.space-between {
    justify-content: space-between;
    width: 100%;
    margin: 8px 0;
  }
`;

export const CommonWrapperHeaderContent = styled.div`
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 150px;
`;

export const CommonWrapperSocial = styled.div`
  color: ${COLORS.GRAY_2};
  font-size: 12px;
  a {
    display: flex;
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
export const FAQRow = styled.div`
  display: flex;
  align-items: center;
`;
export const FAQColumn = styled.div`
  display: block;
`;
