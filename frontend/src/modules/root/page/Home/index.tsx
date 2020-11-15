import Container from 'common/components/Container';
import Head from 'next/head';
import React from 'react';
import { Main, Title } from './styled';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Computer Engineering | KMUTT</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      {/* <Navbar></Navbar> 

          <Header></Header>

          <Announcement></Announcement>
      */}
      <Container>
        <Main>
          <Title>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Title>
        </Main>
      </Container>
    </div>
  );
};

export default Home;
