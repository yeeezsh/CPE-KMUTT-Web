import 'antd/dist/antd.css';
import React, { useEffect } from 'react';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { AppType } from 'next/dist/next-server/lib/utils';
import { CustomAppProps } from 'pages/_app';
import TagManager from 'react-gtm-module';
import { Provider, useDispatch } from 'react-redux';

import NavbarContextProvider from 'common/components/NavbarContextProvider';
import { menuAction } from 'common/redcucers/menu';
import { client } from 'common/services/client';
import { store } from 'common/stores';

import { GlobalStyle } from './styled';

const tagManagerArgs = {
  gtmId: 'GTM-PF6LN2L',
};

const MenuProvider: React.FC<CustomAppProps> = (props) => {
  //TODO: reduce calling menu api every req/pages
  const dispatch = useDispatch();
  dispatch(menuAction.fetch(props.menu));

  return props.children as JSX.Element;
};

const App: AppType = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  const appProps = pageProps as CustomAppProps;

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Provider store={store}>
          <NavbarContextProvider>
            <MenuProvider menu={appProps.menu}>
              <Component {...pageProps} />
            </MenuProvider>
          </NavbarContextProvider>
        </Provider>
      </ApolloProvider>
    </>
  );
};

export default App;
