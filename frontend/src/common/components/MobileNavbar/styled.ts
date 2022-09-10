import { Menu } from 'antd';
import styled, { css } from 'styled-components';

import COLORS from 'common/constants/colors';
import fontFamily from 'common/styles/typography/fontFamily';

import { MOBILE_MENU_MAX_WIDTH } from './constants';

const MENU_BACKGROUND_COLOR = '#FAFAFA';
const SUBMENU_BORDER_COLOR = '#EAEAEA';

interface ContainerProps {
  $isShow: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  max-width: ${MOBILE_MENU_MAX_WIDTH};
  background-color: ${MENU_BACKGROUND_COLOR};
  overflow-y: auto;
  z-index: 1;
  ${({ $isShow }) =>
    !$isShow
      ? css`
          z-index: -100;
          user-select: none;
          pointer-events: none;
        `
      : ``}

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 10px 0px 20px rgba(0, 0, 0, 0.09);
    content: '';
    pointer-events: none;
    user-select: none;
  }
`;

export const StyledMenu = styled(Menu)`
  background-color: ${MENU_BACKGROUND_COLOR};

  .ant-menu-title-content {
    font-family: ${fontFamily.TH};
    color: ${COLORS.GRAY_2};
  }

  .ant-menu-item {
    font-size: 16px;

    &.ant-menu-item-selected,
    &.ant-menu-item-active {
      color: ${COLORS.PRIMARY_COLOR};
      background-color: transparent;

      .ant-menu-title-content,
      a {
        color: ${COLORS.PRIMARY_COLOR};
        text-decoration: none;
      }
    }

    a {
      font-size: 16px;
    }
  }

  .ant-menu-submenu {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    &:hover,
    &:focus {
      color: ${COLORS.PRIMARY_COLOR};

      .ant-menu-submenu-arrow {
        color: ${COLORS.PRIMARY_COLOR};
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${SUBMENU_BORDER_COLOR};
    }

    &.ant-menu-submenu-selected {
      .ant-menu-submenu-title {
        .ant-menu-title-content {
          color: ${COLORS.PRIMARY_COLOR};
        }
      }
    }
  }

  .ant-menu-submenu-title {
    &:hover,
    &:focus {
      color: ${COLORS.PRIMARY_COLOR};

      .ant-menu-title-content {
        color: ${COLORS.PRIMARY_COLOR};
      }

      .ant-menu-submenu-arrow {
        color: ${COLORS.PRIMARY_COLOR};

        &::before {
          background: linear-gradient(
            to right,
            ${COLORS.PRIMARY_COLOR},
            ${COLORS.PRIMARY_COLOR}
          );
        }
        &::after {
          background: linear-gradient(
            to right,
            ${COLORS.PRIMARY_COLOR},
            ${COLORS.PRIMARY_COLOR}
          );
        }
      }
    }

    &:active {
      background-color: transparent;
    }
  }

  .ant-menu-submenu-active,
  .ant-menu-submenu-selected {
    color: ${COLORS.PRIMARY_COLOR};
  }

  .ant-menu-item::after,
  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 0px;
  }
`;
