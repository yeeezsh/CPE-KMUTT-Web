import React from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { CrumbProps } from 'common/components/Layouts/CommonLayout/types';
import { useTags } from 'common/hooks/useTags';

import { DEFAULT_NAVIGATE } from 'modules/programs/constants';

const NAVIGATE: CrumbProps[] = [...DEFAULT_NAVIGATE];

const ProgramContent: React.FC = (props) => {
  //TODO: try to re use use tags
  const tags = useTags();

  return (
    <>
      <Head>
        {
          //TODO: implement header from API
        }
        <title> | หลักสูตร</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout header="หลักสูตร" navigate={NAVIGATE}>
        {/* <NewsContent
          title={title}
          postDate={postDate}
          tumbnail={thumbnail}
          contents={contents}
          file={download}
          connections={connections}
        /> */}
      </CommonLayout>
    </>
  );
};

export default ProgramContent;
