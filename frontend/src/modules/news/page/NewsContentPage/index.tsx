import { join } from 'path';

import React from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { GetNewsByIdQuery, Tag } from 'common/generated/generated-types';
import { useTags } from 'common/hooks/useTags';

import NewsContent from 'modules/news/components/NewsContent';
import { useNewsContentParser } from 'modules/news/hooks/useNewsContentParser';

const NewsContentPage: React.FC<{ data?: GetNewsByIdQuery }> = ({ data }) => {
  // NewsContent
  const { header, title, postDate, thumbnail, contents, download } = useNewsContentParser(
    data,
  );
  const tags = useTags(
    data?.newsAndAnnouncement?.tags as Tag[],
    [
      {
        title: 'หน้าแรก',
        link: '/',
      },
      {
        title: 'ประกาศ',
        link: '/news',
      },
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
      <CommonLayout header="ข่าวสารและประกาศ" navigate={tags}>
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
