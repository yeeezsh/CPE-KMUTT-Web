import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';

import { DEFAULT_NAVIGATE, HEADER_BACKGROUND_IMAGE } from 'modules/programs/constants';

const BrowseProgramPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>หลักสูตร</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout
        header="ข่าวสารและประกาศ"
        navigate={DEFAULT_NAVIGATE}
        headerBackgroundImage={HEADER_BACKGROUND_IMAGE}>
        {/* <BrowseNews data={data} /> */}
      </CommonLayout>
    </>
  );
};

export default BrowseProgramPage;
