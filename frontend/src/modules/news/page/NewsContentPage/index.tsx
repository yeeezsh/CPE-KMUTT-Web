import React from 'react';

import dayjs from 'dayjs';
import Head from 'next/head';
import { useRouter } from 'next/router';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import {
  GetNewsByIdQuery,
  NewsAndAnnouncementDynamicContentDynamicZone,
} from 'common/generated/generated-types';
import { joinImageStrapi } from 'common/utils/join';

import NewsContent from 'modules/news/components/NewsContent';
import { NEWS_CONTENT } from 'modules/news/components/NewsContent/constant';
import { NewsContentContainer } from 'modules/news/components/NewsContent/styled';

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
  // TODO: move this to hooks

  // tags

  // NewsContent
  function mapContents(
    dynamic_element?: NewsAndAnnouncementDynamicContentDynamicZone,
  ): JSX.Element {
    if (dynamic_element?.__typename === 'ComponentContentSectionsTextContent')
      return (
        <NewsContentContainer
          dangerouslySetInnerHTML={{ __html: dynamic_element.body as string }}
        />
      );

    return <></>;
  }

  const header = data?.newsAndAnnouncement?.header;
  const title = data?.newsAndAnnouncement?.header;
  const thumbnail = data?.newsAndAnnouncement?.canvas_preview?.url;
  const postDate = dayjs(data?.newsAndAnnouncement?.createdAt).format(
    'dddd, DD MMMM YYYY',
  );
  const contents = data?.newsAndAnnouncement?.dynamic_content?.map((e) =>
    mapContents(e as NewsAndAnnouncementDynamicContentDynamicZone),
  );

  return (
    <>
      <Head>
        <title>
          {/* //TODO: join heading */}
          {header}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout header="ข่าวสารและประกาศ" navigate={MOCK_NAVIGATE}>
        <NewsContent
          title={title}
          postDate={postDate}
          tumbnail={joinImageStrapi(thumbnail as string)}
          contents={contents}
        />
      </CommonLayout>
    </>
  );
};
export default NewsContentPage;
