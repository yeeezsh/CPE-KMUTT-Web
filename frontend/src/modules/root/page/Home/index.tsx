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

          <HomeCarousel></HomeCarousel>

          <Programme></Programme>

          <Contact></Contact>

          <Footer></Footer>

      */}
      <Container>
        <Main></Main>
      </Container>
    </div>
  );
};

export default Home;
