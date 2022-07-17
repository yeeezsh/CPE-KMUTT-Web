import styled from 'styled-components';

import colors from 'common/constants/colors';
import fontFamily from 'common/styles/typography/fontFamily';
import Shadow from 'common/styles/utility/shadow';

const CONTAINER_MAX_WIDTH = '240px';
const CONTAINER_MIN_WIDTH = '240px';

const BODY_PADDING = '23px 20px';
const BODY_FONT_SIZE = '12px';

const NAME_FONT_SIZE = '14px';
const NAME_FONT_WEIGHT = '700';

export const StyledAnchor = styled.div`
  color: unset;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${Shadow.Card};
  background-color: white;
  min-width: ${CONTAINER_MIN_WIDTH};
  max-width: ${CONTAINER_MAX_WIDTH};
`;

export const Cover = styled.img`
  width: 100%;
`;

export const Body = styled.div`
  font-family: ${fontFamily.TH};
  padding: ${BODY_PADDING};
  color: ${colors.GRAY_2};
  font-size: ${BODY_FONT_SIZE};
`;

export const Name = styled.div`
  color: ${colors.PRIMARY_COLOR};
  font-size: ${NAME_FONT_SIZE};
  font-weight: ${NAME_FONT_WEIGHT};
`;
