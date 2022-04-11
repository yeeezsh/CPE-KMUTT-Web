import { join } from 'path';

import React from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { STATIC_HOME_LINK, STATIC_NEWS_LINK } from 'common/constants/links';
import { GetNewsByIdQuery, Tag } from 'common/generated/generated-types';
import { useTags } from 'common/hooks/useTags';

import NewsContent from 'modules/news/components/NewsContent';
import { useNewsContentParser } from 'modules/news/hooks/useNewsContentParser';

const NewsContentPage: React.FC<{ data?: GetNewsByIdQuery }> = ({ data }) => {
  // NewsContent
  const {
    header,
    title,
    postDate,
    thumbnail,
    contents,
    download,
    connections,
  } = useNewsContentParser(data);
  const tags = useTags(
    data?.newsAndAnnouncement?.tags as Tag[],
    [
      {
        title: 'หน้าแรก',
        link: STATIC_HOME_LINK,
      },
      {
        title: 'ประกาศ',
        link: STATIC_NEWS_LINK,
      },
    ],
    [
      {
        title: header as string,
        link: join(STATIC_HOME_LINK, data?.newsAndAnnouncement?._id || ''),
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
      <CommonLayout header="ข่าวสารและประกาศ" navigate={tags}>
        <NewsContent
          title={title}
          postDate={postDate}
          tumbnail={thumbnail}
          contents={contents}
          file={download}
          connections={connections}
        />
      </CommonLayout>
    </>
  );
};
export default NewsContentPage;
