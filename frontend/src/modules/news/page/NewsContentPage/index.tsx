import { join } from 'path';

import React from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { GetNewsByIdQuery, Tag } from 'common/generated/generated-types';
import { useTags } from 'common/hooks/useTags';

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
  const { header, title, postDate, thumbnail, contents, download } = useNewsContentParser(
    data,
  );
  const tags = useTags(
    data?.newsAndAnnouncement?.tags as Tag[],
    [
      { title: 'home', link: '/' },
      { title: 'news', link: '/news' },
    ],
    [
      {
        title: header as string,
        link: join('/news', data?.newsAndAnnouncement?._id || ''),
      },
    ],
    '/news',
  );

  return (
    <>
      <Head>
        <title>{header}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* //TODO: remove this mock tag*/}
      {/* TODO: implemente files section */}
      <CommonLayout
        header="ข่าวสารและประกาศ"
        // navigate={MOCK_NAVIGATE}
        navigate={tags}>
        <NewsContent
          title={title}
          postDate={postDate}
          tumbnail={thumbnail}
          contents={contents}
          file={download}
        />
      </CommonLayout>
    </>
  );
};
export default NewsContentPage;
