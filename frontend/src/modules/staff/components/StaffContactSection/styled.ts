import styled from 'styled-components';

import Heading from 'common/components/Heading';
import breakpoints from 'common/constants/breakpoints';
import colors from 'common/constants/colors';
import fontFamily from 'common/styles/typography/fontFamily';
import Shadow from 'common/styles/utility/shadow';

const PROFILE_IMAGE_SIZE = '200px';
const PROFILE_IMAGE_MOBILE_SIZE = '100px';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: ${Shadow.Card};
  display: grid;
  grid-template-areas:
    'image name'
    'image contact';
  grid-template-columns: 200px 1fr;
  grid-template-rows: 90px 1fr;
  padding: 10px;
  grid-column-gap: 30px;
  grid-row-gap: 10px;

  @media (max-width: ${breakpoints.IPHONE_11}) {
    grid-column-gap: 18px;
    grid-template-areas:
      'image name'
      'contact contact';
    grid-template-columns: 100px 1fr;
    grid-template-rows: 100px 1fr;
  }
`;

export const ProfileImage = styled.img`
  grid-area: image;
  width: ${PROFILE_IMAGE_SIZE};
  height: ${PROFILE_IMAGE_SIZE};

  @media (max-width: ${breakpoints.IPHONE_11}) {
    width: ${PROFILE_IMAGE_MOBILE_SIZE};
    height: ${PROFILE_IMAGE_MOBILE_SIZE};
  }
`;

export const NameArea = styled.div`
  grid-area: name;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
`;

export const Name = styled(Heading)`
  margin: 0;
`;

export const AcademicRank = styled.div`
  font-family: ${fontFamily.TH};
  font-style: italic;
  font-size: 16px;
  color: ${colors.GRAY_2};
`;

export const ContactArea = styled.div`
  grid-area: contact;
`;

export const StyledTable = styled.table`
  width: 100%;
  font-family: ${fontFamily.TH};

  tr {
    > td:first-child {
      width: 80px;
      padding-right: 10px;
    }
  }
`;
