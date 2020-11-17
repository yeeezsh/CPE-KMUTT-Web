import styled from 'styled-components';
import fontFamily from 'styles/typography/fontFamily';

export const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-family: ${fontFamily.Default};
  border-top: 1px solid #eaeaea;
  background: pink;
  margin-top: -5px;
  padding-top: 45px;
  padding-bottom: 40px;
`;

export const Group = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 200px;
  list-style: none;
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
