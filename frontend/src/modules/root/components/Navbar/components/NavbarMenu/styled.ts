import styled from 'styled-components';
import fontFamily from 'styles/typography/fontFamily';

export const BorderTop = styled.div`
  border-top: 1px solid #eaeaea;
`;

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: ${fontFamily.Default};
  padding-top: 40px;
  padding-bottom: 40px;
  background: white;
`;

export const Group = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
