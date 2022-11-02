import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';

import BrowsePrograms from 'modules/programs/components/BrowsePrograms';
import { MOCK_PROGRAMS } from 'modules/programs/components/BrowsePrograms/constant';
import { DEFAULT_NAVIGATE, HEADER_BACKGROUND_IMAGE } from 'modules/programs/constants';
import { BrowseProgramPageProps } from 'modules/programs/pages/BrowseProgramPage/types';

const BrowseProgramPage: React.FC<BrowseProgramPageProps> = () => {
  return (
    <>
      <Head>
        <title>หลักสูตร</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout
        header="หลักสูตร"
        navigate={DEFAULT_NAVIGATE}
        headerBackgroundImage={HEADER_BACKGROUND_IMAGE}>
        {
          // TODO: implement API
        }
        <BrowsePrograms data={MOCK_PROGRAMS} />
      </CommonLayout>
    </>
  );
};

export default BrowseProgramPage;
