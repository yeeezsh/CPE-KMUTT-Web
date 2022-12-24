import React from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { STATIC_HOME_LINK, STATIC_NEWS_CATEGORY_LINK } from 'common/constants/links';
import { GetNewsByTagSeoLinkQuery } from 'common/generated/generated-types';

import BrowseNews from 'modules/news/components/BrowseNews';

const DEFAULT_NAVIGATE = [
  {
    title: 'หน้าแรก',
    link: STATIC_HOME_LINK,
  },
  {
    title: 'ประกาศ',
    link: STATIC_NEWS_CATEGORY_LINK,
  },
];

export type BrowseNewsPageProps = {
  data?: GetNewsByTagSeoLinkQuery;
};

const BrowseNewsPage: React.FC<BrowseNewsPageProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>ข่าวสารและประกาศ</title>
      </Head>
      <CommonLayout
        withFaqBanner={true}
        header="ข่าวสารและประกาศ"
        navigate={DEFAULT_NAVIGATE}>
        <BrowseNews data={data} />
      </CommonLayout>
    </>
  );
};
export default BrowseNewsPage;
