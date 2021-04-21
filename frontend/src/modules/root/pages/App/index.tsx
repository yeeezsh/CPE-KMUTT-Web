import 'antd/dist/antd.css';
import 'keen-slider/keen-slider.min.css';
import type { AppProps } from 'next/app';

import { GlobalStyle } from './styled';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
