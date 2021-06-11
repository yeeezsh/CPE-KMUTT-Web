import React from 'react';

import Head from 'next/head';

import { Main } from './styled';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main></Main>
    </div>
  );
};
export default Home;
