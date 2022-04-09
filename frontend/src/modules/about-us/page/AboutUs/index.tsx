import React from 'react';

import Head from 'next/head';

import Header from 'common/components/Header';

import Footer from 'modules/home/components/Footer';
import Navbar from 'modules/root/components/Navbar';

const AboutUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>CPE KMUTT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header title="เกี่ยวกับเรา" backgroundImage="/images/about-us-banner.png" />
      <Footer key="1" />
    </>
  );
};

export default AboutUs;
