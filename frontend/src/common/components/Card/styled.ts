import styled from 'styled-components';
import COLORS from 'common/constants/colors';

export const Card = styled.div`
  &.card-body {
    width: 330px;
    height: 250px;
    display: block;
    background-color: #ffffff;
    padding: 20px 15px;
  }

  .card-discription {
    font-size: 14px;
    color: ${COLORS.GRAY_1};
  }

  .card-title {
    color: ${COLORS.PRIMARY_COLOR};
    font-size: 12px;
  }

  .card-date {
    color: ${COLORS.GRAY_2};
    font-size: 14px;
    bottom: 0;
    position: absolute;
  }
`;
