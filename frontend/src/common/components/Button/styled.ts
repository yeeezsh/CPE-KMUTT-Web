import styled from 'styled-components';
import COLORS from 'common/constants/colors';

export const Btn = styled.button`
  /* Example*/
  font-family: 'Kanit', sans-serif;
  height: 40px;
  width: auto;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid ${COLORS.PRIMARY_COLOR};
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${COLORS.PRIMARY_COLOR};
  cursor: pointer;
`;
