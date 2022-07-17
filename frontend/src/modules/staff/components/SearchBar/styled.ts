import { Input } from 'antd';
import styled from 'styled-components';

import colors from 'common/constants/colors';
import fontFamily from 'common/styles/typography/fontFamily';
import Shadow from 'common/styles/utility/shadow';

const INPUT_FONT_SIZE = '16px;';
const INPUT_HEIGHT = '50px';

export const StyledInput = styled(Input)`
  font-family: ${fontFamily.TH};
  padding: 13px 16px;
  font-size: ${INPUT_FONT_SIZE};
  height: ${INPUT_HEIGHT};
  border: none;
  box-shadow: ${Shadow.Card};
  color: #a3a3a3;
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    box-shadow: ${Shadow.Card};
    color: ${colors.PRIMARY_COLOR};
  }

  input {
    color: #a3a3a3;

    &:hover,
    &:focus {
      color: ${colors.PRIMARY_COLOR};
    }
  }
`;
