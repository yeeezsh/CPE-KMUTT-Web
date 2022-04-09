import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import Container from 'common/components/Container';
import Header from 'common/components/Header';
import { FaqWithBanner } from 'common/components/Layouts/CommonLayout';
import NavigationMap from 'common/components/NavigationMap';

import ContentSection from 'modules/about-us/components/ContentSection';
import SidebarSection from 'modules/about-us/components/SidebarSection';
import { sidebarItems } from 'modules/about-us/components/SidebarSection/constants';
import { AboutUsContainer } from 'modules/about-us/page/AboutUs/styled';
import Footer from 'modules/home/components/Footer';
import Navbar from 'modules/root/components/Navbar';

const AboutUs: React.FC<{ id: string }> = ({ id }) => {
  const [aboutTitle, setAboutTitle] = useState(`เกี่ยวกับภาควิชาฯ`);

  useEffect(() => {
    const title = sidebarItems
      .map(({ item }) => item.find(({ key }) => key === id)?.title)
      .filter((element) => {
        return element !== undefined;
      })
      .toString();
    setAboutTitle(title);
  }, [id]);
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
      <AboutUsContainer>
        <SidebarSection activeKey={id} />
        <ContentSection />
      </AboutUsContainer>
      <FaqWithBanner />
      <Footer key="1" />
    </>
  );
};

export default AboutUs;
