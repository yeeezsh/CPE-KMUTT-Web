import { createGlobalStyle } from 'styled-components';

import COLORS from 'common/constants/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    font-family: 'Kanit', sans-serif;
  }

  @font-face {
    font-family: 'Kanit';
    src: local('Kanit'), url(/fonts/Kanit-Regular.ttf) format('truetype');
  }
  @font-face {
  font-family: 'Kanit';
  src:local('Kanit'), url(/fonts/Kanit-Bold.ttf) format('truetype');
  font-weight: bold;
}
  @font-face {
      font-family: 'Montserrat';
      src: local('Montserrat'), url(/fonts/Montserrat-Regular.ttf) format('truetype');
  }
  a:link , a:visited {
    text-decoration: none;
    color: ${COLORS.GRAY_2};
    font-size: 14px;
  }

  a:hover , a:active {
    text-decoration: underline;
    color: ${COLORS.PRIMARY_COLOR};
    font-size: 14px;
  }

  a:link.menu-item , a:visited.menu-item {
    text-decoration: none;
    color: ${COLORS.GRAY_2};
    opacity: 0.6;
    font-size: 14px;
  }

  a.menu-item.active, a:hover.menu-item , a:active.menu-item {
    text-decoration: none;
    color: ${COLORS.PRIMARY_COLOR};
    font-size: 14px;
    font-weight: bold;
    opacity: 1;
  }

`;
