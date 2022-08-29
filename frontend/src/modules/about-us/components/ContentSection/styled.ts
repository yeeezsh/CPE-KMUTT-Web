import styled from 'styled-components';

import colors from 'common/constants/colors';

export const ContentContainer = styled.div`
  padding-left: 40px;
`;

export const ContentImage = styled.img`
  margin-bottom: 40px;
`;

export const ContentTitle = styled.h1`
  color: ${colors.PRIMARY_COLOR};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const ContentParagraph = styled.p`
  text-indent: 2em;
  color: #373736;
`;
