import COLORS from 'common/constants/colors';
import styled from 'styled-components';

export const WrapperStyle = styled.div`
  display: block;
  font-family: 'Kanit', sans-serif;
  background-color: #fafafa;
  width: 100%;
  margin: auto;
  .ant-breadcrumb {
    display: flex;
  }

  .ant-breadcrumb > span:last-child a {
    color: ${COLORS.GRAY_2};
    font-weight: bold;
  }
`;

export const WrapperHeader = styled.div`
  background-repeat: no-repeat;
  background-position: right;
  background-image: url(/images/wrapper_bg_header.png);
  height: 150px;
  display: block;
`;

export const WrpperCanvas = styled.div`
  background: linear-gradient(90deg, #4a60ac 60%, rgba(74, 96, 172, 0) 100%);
  height: 150px;
`;

export const WrapperRow = styled.div`
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

export const WrapperHeaderContent = styled.div`
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 150px;
`;

export const WrapperSocial = styled.div`
  color: ${COLORS.GRAY_2};
  font-size: 12px;
  a {
    display: flex;
  }
`;
