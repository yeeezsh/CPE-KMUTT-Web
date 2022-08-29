import { Row } from 'antd';
import styled from 'styled-components';

import colors from 'common/constants/colors';

const SPACE_FOR_CONTACT_DETAIL = '50px';

export const StyledRow = styled(Row)`
  width: 100%;
`;

export const ContactSection = styled.section`
  margin-top: 40px;
  margin-bottom: 50px;
`;

export const Address = styled.div`
  color: ${colors.GRAY_1};
  margin-bottom: ${SPACE_FOR_CONTACT_DETAIL};
`;

export const ContactDetail = styled.div`
  color: ${colors.GRAY_2};
  font-weight: medium;
`;
