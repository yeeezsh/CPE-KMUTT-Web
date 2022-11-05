import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';

import BrowsePrograms from 'modules/programs/components/BrowsePrograms';
import { DEFAULT_NAVIGATE, HEADER_BACKGROUND_IMAGE } from 'modules/programs/constants';
import { BrowseProgramPageProps } from 'modules/programs/pages/BrowseProgram/types';
import mapProgramsPage from 'modules/programs/utils/mapPrograms.ts';

const BrowseProgram: React.FC<BrowseProgramPageProps> = ({ data }) => {
  const programs = mapProgramsPage(data);
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
        <BrowsePrograms data={programs} />
      </CommonLayout>
    </>
  );
};

export default BrowseProgram;
