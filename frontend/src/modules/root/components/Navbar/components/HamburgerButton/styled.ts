import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';
import COLORS from 'common/constants/colors';
import fontFamily from 'common/styles/typography/fontFamily';

export const StyledMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 30px;
  font-family: ${fontFamily.EN};
  &:hover {
    color: ${COLORS.PRIMARY_COLOR};
  }
  &:focus {
    outline: none;
  }
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    margin-right: 6px;
  }
`;
export const Hamburger = styled.svg`
  width: 18px;
  height: 12px;
  &:hover {
    fill: ${COLORS.PRIMARY_COLOR};
  }
`;

export const Cancel = styled.svg`
  width: 18px;
  height: 12px;
  &:hover {
    fill: ${COLORS.PRIMARY_COLOR};
  }
`;
