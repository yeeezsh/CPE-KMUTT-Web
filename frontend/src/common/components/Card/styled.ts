import styled from 'styled-components';
import COLORS from 'common/constants/colors';

export const Card = styled.div`
  font-family: 'Kanit', sans-serif;
  width: 330px;
  height: 250px;
  display: block;
  position: relative;

  .card-picture {
    width: 330px;
    height: 125px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const CardTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 6px;
  color: ${COLORS.PRIMARY_COLOR};
`;

export const CardDiscription = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.GRAY_1};
`;

export const CardDate = styled.div`
  color: ${COLORS.GRAY_2};
  font-size: 14px;
  bottom: 20px;
  position: absolute;
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
`;

export const CardBodyStyled = styled.div`
  position: relative;
  &.card-normal {
    width: 330px;
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
    width: 330px;

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
    }
  }
`;
