import React from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { GetNewsByIdQuery } from 'common/generated/generated-types';

import NewsContent from 'modules/news/components/NewsContent';
import { useNewsContentParser } from 'modules/news/hooks/useNewsContentParser';

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
  {
    link: '/',
    title: 'ประกาศรายชื่อผู้มีสิทธิ์สอบสัมภาษณ์​ โครงการ Active Recruitment รอบที่ 2',
  },
];

const NewsContentPage: React.FC<{ data?: GetNewsByIdQuery }> = ({ data }) => {
  // NewsContent
  const { header, title, postDate, thumbnail, contents } = useNewsContentParser(data);

  return (
    <>
      <Head>
        <title>{header}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* //TODO: remove this mock tag*/}
      <CommonLayout header="ข่าวสารและประกาศ" navigate={MOCK_NAVIGATE}>
        <NewsContent
          title={title}
          postDate={postDate}
          tumbnail={thumbnail}
          contents={contents}
        />
      </CommonLayout>
    </>
  );
};
export default NewsContentPage;
