import styled, { css } from 'styled-components';

import COLORS from 'common/constants/colors';

import { ButtonProps } from './types';

const BACKGROUND_COLORS = {
  primary: COLORS.PRIMARY_COLOR,
  yellow: COLORS.YELLOW_1,
  borderless: 'transparent',
  white: '#ffffff',
  transparent: 'transparent',
};

const BORDER_COLORS = {
  primary: '#ffffff',
  yellow: COLORS.YELLOW_1,
  borderless: 'transparent',
  white: '#ffffff',
  transparent: COLORS.PRIMARY_COLOR,
};

const FONT_COLORS = {
  primary: '#ffffff',
  yellow: '#ffffff',
  borderless: COLORS.PRIMARY_COLOR,
  white: COLORS.PRIMARY_COLOR,
  transparent: COLORS.PRIMARY_COLOR,
};

function applyColorCss({ $color = `primary` }: ButtonProps) {
  return css`
    border: 1px solid ${BORDER_COLORS[$color]};
    background-color: ${BACKGROUND_COLORS[$color]};
    color: ${FONT_COLORS[$color]};
  `;
}

function isHidden({ $hidden }: ButtonProps) {
  if ($hidden)
    return css`
      display: none;
    `;
  else
    return css`
      display: flex;
    `;
}

export const Btn = styled.button<ButtonProps>`
  /* Example*/
  font-family: 'Kanit', sans-serif;
  height: 40px;
  width: auto;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 600;
  ${applyColorCss};
  ${isHidden};
  align-items: center;
  cursor: pointer;
`;
