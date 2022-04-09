import React, { useState } from 'react';

import Head from 'next/head';

import Header from 'common/components/Header';
import NavigationMap from 'common/components/NavigationMap';

import Footer from 'modules/home/components/Footer';
import Navbar from 'modules/root/components/Navbar';

const AboutUs: React.FC = () => {
  const [aboutTitle, setAboutTitle] = useState(`เกี่ยวกับภาควิชาฯ`);
  return (
    <>
      <Head>
        <title>ABOUT US | CPE KMUTT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header title="เกี่ยวกับเรา" backgroundImage="/images/about-us-banner.png" />
      <NavigationMap
        breadcrumb={[{ title: `เกี่ยวกับเรา`, url: `/` }, { title: aboutTitle }]}
      />
      <Footer key="1" />
    </>
  );
};

export default AboutUs;
