import COLORS from 'common/constants/colors';
import styled from 'styled-components';
import fontFamily from 'styles/typography/fontFamily';
import { DesignProps } from './interface';

export const MenuWrap = styled.div`
  width: 100%;
  background: white;
  margin-top: -5px;
  display: flex;
  border-top: 1px solid #eaeaea;
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-family: ${fontFamily.TH};
  background: white;
  justify-content: space-between;
  padding-bottom: 60px;
  border-bottom: 1px solid #eaeaea;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 189px;
`;

export const Image = styled.div`
  height: 80px;
  margin: 20px 0 20px 0;
  background-image: url(${(props: DesignProps) => props.img});
  background-size: 100%;
  background-position: center;
`;

export const Mask = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLORS.PRIMARY_COLOR};
  opacity: 0.6;
`;

export const Item = styled.li`
  list-style: none;
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 6px;
  color: ${COLORS.GRAY_2};
`;

export const ItemLink = styled.a`
  &:link,
  &:visited {
    color: ${COLORS.GRAY_2};
    font-size: 14px;
    font-weight: 300;
    padding-bottom: 6px;
  }
  &:hover {
    color: ${COLORS.PRIMARY_COLOR};
    text-decoration: underline;
  }
`;

export const SubMenu = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubMenuItem = styled.div`
  font-family: ${fontFamily.TH};
  display: flex;
  font-size: 14px;
  cursor: pointer;
  padding-right: 40px;
  color: ${COLORS.GRAY_2};
  &:hover {
    color: ${COLORS.PRIMARY_COLOR};
    text-decoration: underline;
  }
`;
