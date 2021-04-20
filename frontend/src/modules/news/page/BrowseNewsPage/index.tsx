import BrowseNews from 'modules/news/components/BrowseNews';
import Footer from 'modules/root/components/Footer';
import Head from 'next/head';
import React from 'react';
import { Main } from './styled';

const BrowseNewsPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>browse News Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <BrowseNews></BrowseNews>
        <Footer key="1"></Footer>
      </Main>
    </div>
  );
};
export default BrowseNewsPage;
