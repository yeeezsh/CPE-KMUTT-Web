import styled from 'styled-components';

import colors from 'common/constants/colors';

export const SidebarBody = styled.div`
  max-width: 320px;
  border-right: 1px solid #eaeaea;
  font-family: 'Kanit', sans-serif;
  width: 100%;
`;

export const SidebarContent = styled.div`
  margin-bottom: 8px;
`;

export const SidebarTitle = styled.div`
  color: #666666;
  font-size: 14px;
  font-weight: 700;
`;

export const SidebarItem = styled.div`
  margin-left: 24px;
  font-size: 14px;

  color: #666666;

  &.active {
    a {
      color: ${colors.PRIMARY_COLOR};
    }
    text-decoration: underline;
  }
`;
