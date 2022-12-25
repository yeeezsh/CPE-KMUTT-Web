import React from 'react';

import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { CrumbProps } from 'common/components/Layouts/CommonLayout/types';
import { useTags } from 'common/hooks/useTags';

import NewsContent from 'modules/news/components/NewsContent';
import { DEFAULT_NAVIGATE } from 'modules/programs/constants';
import { useProgramContentParser } from 'modules/programs/hooks/useProgramContentParser';
import { ProgramContentProps } from 'modules/programs/pages/ProgramContent/types';

const NAVIGATE: CrumbProps[] = [...DEFAULT_NAVIGATE];

const ProgramContent: React.FC<ProgramContentProps> = ({ data }) => {
  //TODO: try to re use use tags
  const tags = useTags();

  const { title, thumbnail, download, postDate, contents } = useProgramContentParser(
    data,
  );

  return (
    <>
      <Head>
        {
          //TODO: implement header from API
        }
        <title> {title} | หลักสูตร</title>
      </Head>
      <CommonLayout header="หลักสูตร" navigate={NAVIGATE}>
        <NewsContent
          title={title}
          postDate={postDate}
          tumbnail={thumbnail}
          contents={contents}
          file={download}
          // TODO: connection
          connections={[]}
        />
      </CommonLayout>
    </>
  );
};

export default ProgramContent;
