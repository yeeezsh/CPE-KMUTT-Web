import { Divider } from 'antd';
import { DividerProps as AntdDividerProps } from 'antd/lib/divider';
import styled, { css } from 'styled-components';

const DEFAULT_DIVIDER_BORDER_COLOR = '#EAEAEA';

interface StyledDividerProps extends AntdDividerProps {
  $borderColor?: string;
  $marginTop?: string;
  $marginBottom?: string;
}

export const StyledDivider = styled(Divider)<StyledDividerProps>`
  border-top-color: ${({ $borderColor }) => $borderColor || DEFAULT_DIVIDER_BORDER_COLOR};
  ${({ $marginTop }) =>
    $marginTop
      ? css`
          margin-top: ${$marginTop};
        `
      : ''}
  ${({ $marginBottom }) =>
    $marginBottom
      ? css`
          margin-bottom: ${$marginBottom};
        `
      : ''}
`;

export const HeaderWithDivider = styled.div`
  margin-bottom: -24px;
`;
