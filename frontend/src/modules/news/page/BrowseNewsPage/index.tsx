import React from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { GetNewsQuery } from 'common/generated/generated-types';

import BrowseNews from 'modules/news/components/BrowseNews';

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

export type BrowseNewsPageProps = {
  data?: GetNewsQuery;
};

// TODO: implement data api to compoenents
// TODO: implement pagination
const BrowseNewsPage: React.FC<BrowseNewsPageProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>ข่าวสารและประกาศ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout header="ข่าวสารและประกาศ" navigate={MOCK_NAVIGATE}>
        <BrowseNews data={data} />
      </CommonLayout>
    </>
  );
};
export default BrowseNewsPage;
