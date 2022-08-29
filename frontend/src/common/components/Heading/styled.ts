import styled from 'styled-components';

import fontFamily from 'common/styles/typography/fontFamily';

export interface HProps {
  $color?: string;
}

export const H1 = styled.h1<HProps>`
  display: block;
  font-family: ${fontFamily.TH};
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  width: 100%;
  ${(props) => (props.$color ? `color: ${props.$color}` : '')}
`;

export const H2 = styled.h2<HProps>`
  display: block;
  font-family: ${fontFamily.TH};
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
  width: 100%;
  ${(props) => (props.$color ? `color: ${props.$color}` : '')}
`;

export const HEADING_MAPPER = {
  h1: H1,
  h2: H2,
};
