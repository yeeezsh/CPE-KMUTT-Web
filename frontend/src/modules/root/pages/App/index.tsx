import 'antd/dist/antd.css';
import React from 'react';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { client } from 'common/services/client';
import { store } from 'common/stores';

import { GlobalStyle } from './styled';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
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
