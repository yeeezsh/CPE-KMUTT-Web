import Navbar from 'modules/root/components/Navbar/index';
import Head from 'next/head';
import React from 'react';
import { Container, Main } from './styled';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main></Main>
      </Container>
    </>
  );
};

export default Home;
