import { createGlobalStyle } from 'styled-components';
import COLORS from 'common/constants/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
  }

  @font-face {
    font-family: 'Kanit';
    src: local('Kanit'), url(/fonts/Kanit-Regular.ttf) format('truetype');
  }
  @font-face {
      font-family: 'Montserrat';
      src: local('Montserrat'), url(/fonts/Montserrat-Regular.ttf) format('truetype');
    }
  a:link , a:visited {
    text-decoration: none;
    color: ${COLORS.PRIMARY_COLOR};
    font-size: 14px;
  }

  a:hover , a:active {
    text-decoration: underline;
    color: ${COLORS.GRAY_2};
    font-size: 14px;
  }
`;
