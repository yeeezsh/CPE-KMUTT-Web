import CommonLayout from 'common/components/Layouts/CommonLayout';
import BrowseNews from 'modules/news/components/BrowseNews';
import Head from 'next/head';
import React from 'react';

const MOCK_NAVIGATE = [
  {
    link: '/',
    title: 'หน้าแรก',
  },
  {
    link: '/',
    title: 'ประกาศ',
  },
  {
    link: '/',
    title: 'สำหรับนักศึกษาใหม่',
  },
];

const BrowseNewsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>browse News Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout header="ข่าวสารและประกาศ" navigate={MOCK_NAVIGATE}>
        <BrowseNews />
      </CommonLayout>
    </>
  );
};
export default BrowseNewsPage;
