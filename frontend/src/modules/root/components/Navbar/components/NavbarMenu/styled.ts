import styled from 'styled-components';
import fontFamily from 'styles/typography/fontFamily';

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: ${fontFamily.Default};
`;

export const Group = styled.ul`
  list-style: none;
  padding-top: 40px;
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
    color: #80a8d9;
  }
`;
