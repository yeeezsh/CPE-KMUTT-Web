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

export const CardBodyStyled = styled.div`
  &.card-normal {
    width: 330px;
    height: 250px;
    display: block;
    background-color: #ffffff;
    padding: 20px 15px;
    position: relative;

    .discription {
      font-size: 14px;
      color: ${COLORS.GRAY_1};
      font-weight: 700;
    }

    .title {
      color: ${COLORS.PRIMARY_COLOR};
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .date {
      color: ${COLORS.GRAY_2};
      font-size: 14px;
      bottom: 20px;
      position: absolute;
    }
  }

  &.card-primary {
    background-color: ${COLORS.PRIMARY_COLOR};
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 16px;
    padding-right: 20px;
    position: relative;
    height: 125px;
    width: 330px;

    .discription {
      font-size: 14px;
      color: #ffffff;
      font-weight: 700;
    }

    .title {
      color: #ffffff;
      opacity: 0.5;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .date {
      color: #ffffff;
      opacity: 0.5;
      font-size: 14px;
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
`;