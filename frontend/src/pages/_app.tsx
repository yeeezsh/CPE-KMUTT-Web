import { GetMenuQuery, GetMenuDocument } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import App from 'modules/root/pages/App';

export default App;

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = (await Component.getInitialProps(ctx)) as any;
  }

  const { data } = await client.query<GetMenuQuery>({
    query: GetMenuDocument,
    // TODO: remove this locale hardcode
    variables: { locale: 'th' },
  });
  pageProps = {
    ...pageProps,
    menu: data,
  };
  return { pageProps };
};

export type CustomAppProps = { menu: GetMenuQuery };
