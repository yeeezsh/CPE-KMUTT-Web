import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { STATIC_ABOUT_US_LINK, STATIC_HOME_LINK } from 'common/constants/links';

import ContentSection from 'modules/about-us/components/ContentSection';
import SidebarSection from 'modules/about-us/components/SidebarSection';
import { SIDEBAR_ITEMS } from 'modules/about-us/components/SidebarSection/constants';
import { HEADER_BACKGROUND_IMAGE } from 'modules/about-us/constants';
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
    const title = SIDEBAR_ITEMS.map(
      ({ item }) => item.find(({ key }) => key === id)?.title,
    )
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
      </Head>

      <CommonLayout
        header="เกี่ยวกับเรา"
        navigate={DEFAULT_NAVIGATE}
        headerBackgroundImage={HEADER_BACKGROUND_IMAGE}>
        <AboutUsContainer>
          <SidebarSection activeKey={id} />
          <ContentSection />
        </AboutUsContainer>
      </CommonLayout>
    </>
  );
};

export default AboutUs;
