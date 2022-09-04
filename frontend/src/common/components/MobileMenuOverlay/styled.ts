import styled, { css } from 'styled-components';

import { MOBILE_MENU_MAX_WIDTH } from 'common/components/MobileNavbar/constants';

interface OverlayProps {
  $isShow: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  z-index: 9999;

  ${({ $isShow }) =>
    !$isShow
      ? css`
          display: none;
        `
      : css`
          transform: translateX(-${MOBILE_MENU_MAX_WIDTH});
        `}
`;
