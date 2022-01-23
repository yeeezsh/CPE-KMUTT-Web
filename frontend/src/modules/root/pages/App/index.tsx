import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from 'common/stores';

import { GlobalStyle } from './styled';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
