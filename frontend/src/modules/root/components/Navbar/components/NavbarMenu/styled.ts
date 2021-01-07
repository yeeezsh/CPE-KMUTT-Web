import COLORS from 'common/constants/colors';
import styled from 'styled-components';
import fontFamily from 'styles/typography/fontFamily';

interface DesignProps {
  img: string;
}

export const BorderTop = styled.div`
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
  font-weight: bold;
  font-size: 16px;
  color: #666666;
`;

export const ItemLink = styled.a`
  font-weight: normal;
  font-size: 14px;
  color: #666666;
  &:hover {
    color: ${COLORS.PRIMARY_COLOR};
    text-decoration: underline;
  }
`;

export const SubMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SubMenuItem = styled.div`
  font-family: ${fontFamily.TH};
  font-size: 14px;
  cursor: pointer;
  padding: 0 40px 20px 0;
  color: ${COLORS.GRAY_2};
  &:hover {
    color: ${COLORS.PRIMARY_COLOR};
    text-decoration: underline;
  }
`;
