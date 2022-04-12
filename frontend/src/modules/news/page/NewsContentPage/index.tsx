import React from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import {
  STATIC_HOME_LINK,
  STATIC_NEWS_CATEGORY_LINK,
  STATIC_NEWS_CATEGORY_LINK_ID,
  STATIC_NEWS_CATEGORY_LINK_ID_PATTERN,
  STATIC_NEWS_ID_LINK,
  STATIC_NEWS_ID_LINK_PATTERN,
} from 'common/constants/links';
import { GetNewsByIdQuery, Tag } from 'common/generated/generated-types';
import { useTags } from 'common/hooks/useTags';

import NewsContent from 'modules/news/components/NewsContent';
import { useNewsContentParser } from 'modules/news/hooks/useNewsContentParser';

const NewsContentPage: React.FC<{ data?: GetNewsByIdQuery }> = ({ data }) => {
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
        link: STATIC_NEWS_CATEGORY_LINK,
      },
    ],
    [
      {
        title: header as string,
        link: STATIC_NEWS_ID_LINK.replace(
          STATIC_NEWS_ID_LINK_PATTERN,
          data?.newsAndAnnouncement?._id || '',
        ),
      },
    ],
    STATIC_NEWS_CATEGORY_LINK_ID.replace(STATIC_NEWS_CATEGORY_LINK_ID_PATTERN, ''),
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
