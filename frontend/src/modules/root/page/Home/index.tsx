import Footer from 'modules/root/components/Footer';
import Head from 'next/head';
import React from 'react';
import { Main } from './styled';
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Footer key="1"></Footer>
      </Main>
    </div>
  );
};
export default Home;
