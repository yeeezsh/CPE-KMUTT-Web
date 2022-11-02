import styled from 'styled-components';

export const BrowseProgramRow = styled.div`
  display: flex;
  &.space-between {
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &.align-center {
    align-items: center;
  }
  width: 95%;
  margin: 16px;
  overflow: hidden;
  padding: 0px;
`;

export const Header = styled.div`
  margin-left: 16px;
  padding-bottom: 6px;
`;

export const BrowseProgramStyle = styled.div`
  display: block;
  font-family: 'Kanit', sans-serif;
  width: 100%;
  background-color: #fafafa;
  padding: 10px;
  padding-top: 24px;
`;
