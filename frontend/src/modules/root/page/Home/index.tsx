import Carousel from 'common/components/Carousel';
import {
  CAROUSEL_DEFAULT_CONSTANT,
  CAROUSEL_SLIDER_CONSTANT,
} from 'common/components/Carousel/constant';
import Container from 'common/components/Container';
import Head from 'next/head';
import React from 'react';
import { Main } from './styled';

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
      <Carousel item={CAROUSEL_DEFAULT_CONSTANT} variant="Default" />
      <Container>
        <Carousel item={CAROUSEL_SLIDER_CONSTANT} variant="Slider" />
      </Container>
      {/*
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
