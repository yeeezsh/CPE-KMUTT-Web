import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';
import COLORS from 'common/constants/colors';

export const WhatNewStyle = styled.div`
  display: flex;
  font-family: 'Kanit', sans-serif;
  background-color: #fafafa;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(/images/whatNewSection_bg.svg);
  height: 525px;
  width: 100%;
  margin: auto;

  .show-all {
    position: absolute;
    right: 0;
    top: 25px;
    font-size: 16px;
    color: ${COLORS.PRIMARY_COLOR};
    display: flex;
    align-items: center;
    cursor: pointer;

    .arrow-icon {
      background-image: url(/images/arrow-right.svg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      filter: invert(38%) sepia(7%) saturate(5711%) hue-rotate(191deg) brightness(91%)
        contrast(79%);
      width: 16px;
      height: 14px;
      margin-left: 15px;
    }
  }
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    height: auto;
  }
`;

export const PortletTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1024px;
  margin-top: 65px;
  margin-bottom: 40px;
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    flex-direction: column;
  }
`;

export const PortletTitleHeader = styled.div`
  font-size: 28px;
  color: ${COLORS.PRIMARY_COLOR};
`;

export const PortletDiscription = styled.div`
  color: ${COLORS.GRAY_2};
  font-size: 14px;
`;

export const ShowAllButton = styled.div`
  display: flex;
`;

export const PortletTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
