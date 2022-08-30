import { createGlobalStyle } from 'styled-components';

const KanitFont = require('../public/fonts/Kanit-Regular.ttf');
const MontserratFont = require('../public/fonts/Montserrat-Regular.ttf');

const GlobalStyleSetup = createGlobalStyle`
  @font-face {
    font-family: 'Kanit';
    src: local('Kanit'), url(${KanitFont}) format('truetype');
  }
  @font-face {
      font-family: 'Montserrat';
      src: local('Montserrat'), url(${MontserratFont}) format('truetype');
  }
`;

const GlobalStyleDecorator = (Story) => (
  <>
    <GlobalStyleSetup />
    <Story />
  </>
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [GlobalStyleDecorator];
