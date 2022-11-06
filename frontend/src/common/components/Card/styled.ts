import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';
import COLORS from 'common/constants/colors';

export const Card = styled.div`
  font-family: 'Kanit', sans-serif;
  width: 100%;
  height: 250px;
  display: block;
  position: relative;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    width: 100%;
    height: 108px;
    display: flex;
    margin-bottom: 10px;
  }
`;

export const CardTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 6px;
  color: ${COLORS.PRIMARY_COLOR};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    line-height: 18px;
    color: ${COLORS.PRIMARY_COLOR};
    opacity: 1;
  }
`;

export const CardDiscription = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.GRAY_1};
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    line-height: 18px;
    color: ${COLORS.GRAY_1};
  }
`;

export const CardDate = styled.div`
  color: ${COLORS.GRAY_2};
  font-size: 14px;
  bottom: 16px;
  position: absolute;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    font-size: 12px;
    opacity: 0.7;
    color: ${COLORS.GRAY_2};
    bottom: 10px;
  }
`;

export const CardNextBtn = styled.div`
  width: 20px;
  height: 14px;
  font-size: 14px;
  bottom: 20px;
  right: 20px;
  position: absolute;
  background-image: url(/images/arrow-right.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    display: none;
  }
`;

export const CardBodyStyled = styled.div`
  position: relative;
  &.card-normal {
    height: 250px;
    display: block;
    background-color: #ffffff;
    padding: 20px 15px;
  }

  &.card-primary {
    background-color: ${COLORS.PRIMARY_COLOR};
    padding: 0 20px;
    padding-top: 10px;
    padding-bottom: 16px;
    height: 125px;

    & > ${CardTitle} {
      color: #ffffff;
      opacity: 0.5;
    }

    & > ${CardDiscription} {
      color: #ffffff;
    }

    & > ${CardDate} {
      color: #ffffff;
      opacity: 0.5;
      bottom: 16px;
      position: absolute;
    }

    .card-next {
      font-size: 20px;
      bottom: 6px;
      right: 20px;
      position: absolute;
      color: #ffffff;
      cursor: pointer;
    }
  }

  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    &.card-normal {
      height: 108px;
      width: 100%;
      padding: 0 20px;
      padding-top: 10px;
      padding-bottom: 16px;
    }
    &.card-primary {
      height: 108px;
      width: calc(100% - 108px);
      background-color: #ffffff;
      & > ${CardTitle} {
        color: ${COLORS.PRIMARY_COLOR};
        opacity: 1;
      }
      & > ${CardDiscription} {
        color: ${COLORS.GRAY_1};
      }
      & > ${CardDate} {
        color: ${COLORS.GRAY_2};
        opacity: 0.7;
        bottom: 10px;
      }
    }
  }
`;

export const CardImage = styled.div`
  height: 125px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    width: 108px;
    height: 108px;
  }
`;
