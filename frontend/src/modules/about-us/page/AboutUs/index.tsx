import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { STATIC_ABOUT_US_LINK, STATIC_HOME_LINK } from 'common/constants/links';

import ContentSection from 'modules/about-us/components/ContentSection';
import SidebarSection from 'modules/about-us/components/SidebarSection';
import { sidebarItems } from 'modules/about-us/components/SidebarSection/constants';
import { AboutUsContainer } from 'modules/about-us/page/AboutUs/styled';

const AboutUs: React.FC<{ id: string }> = ({ id }) => {
  const [aboutTitle, setAboutTitle] = useState(`เกี่ยวกับภาควิชาฯ`);

  const DEFAULT_NAVIGATE = [
    {
      title: 'หน้าแรก',
      link: STATIC_HOME_LINK,
    },
    {
      title: aboutTitle || 'เกี่ยวกับเรา',
      link: STATIC_ABOUT_US_LINK,
    },
  ];

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

      <CommonLayout header="เกี่ยวกับเรา" navigate={DEFAULT_NAVIGATE}>
        {/* TODO://make coment layout accept bg props */}
        {/* <Header title="เกี่ยวกับเรา" backgroundImage="/images/about-us-banner.png" /> */}
        <AboutUsContainer>
          <SidebarSection activeKey={id} />
          <ContentSection />
        </AboutUsContainer>
      </CommonLayout>
    </>
  );
};

export default AboutUs;
