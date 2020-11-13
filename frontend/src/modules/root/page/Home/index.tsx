import Navbar from 'modules/root/components/Navbar/index';
import Head from 'next/head';
import React from 'react';
import { Container, Main, Title } from './styled';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <Title>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Title>
        </Main>
      </Container>
    </>
  );
};

export default Home;
