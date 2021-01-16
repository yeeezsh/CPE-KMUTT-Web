import Head from 'next/head';
import React from 'react';
import { Main } from './styled';
import WhatNewSection from '../../components/WhatNewSection';


const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Computer Engineering | KMUTT</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Main>
        <WhatNewSection />
      </Main>
      {/* <Navbar></Navbar>
      
          <Header></Header>

          <Announcement></Announcement>

          <HomeCarousel></HomeCarousel>

          <Programme></Programme>

          <Contact></Contact>

          <Footer></Footer>
          
      */}
    </div>
  );
};

export default Home;
