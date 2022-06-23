import 'antd/dist/antd.css';
import React, { useEffect } from 'react';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';
import { Provider } from 'react-redux';

import { client } from 'common/services/client';
import { store } from 'common/stores';

import { GlobalStyle } from './styled';

const tagManagerArgs = {
  gtmId: 'GTM-PF6LN2L',
};

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </>
  );
};

export default App;
