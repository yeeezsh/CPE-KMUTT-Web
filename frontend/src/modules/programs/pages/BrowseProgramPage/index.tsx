import Head from 'next/head';

import CommonLayout from 'common/components/Layouts/CommonLayout';
import { ImageStrapiUrl } from 'common/utils/urls';

import BrowsePrograms from 'modules/programs/components/BrowsePrograms';
import { BrowseProgramTypes } from 'modules/programs/components/BrowsePrograms/types';
import { DEFAULT_NAVIGATE, HEADER_BACKGROUND_IMAGE } from 'modules/programs/constants';
import { BrowseProgramPageProps } from 'modules/programs/pages/BrowseProgramPage/types';

//TODO: REFACTOR THIS SHIT
function mapProgramsPage(data: BrowseProgramPageProps): BrowseProgramTypes {
  // const mapped:BrowseProgramTypes = data.data.programs.m

  const groups = data.data.programTagsLocale?.map((e) => ({
    id: e?.id,
    name: e?.program_tag_name,
    seo_link: e?.seo_link,
  }));

  // const groups_rn =

  const mapped = groups?.map((e) => ({
    ...e,
    programs: data.data.programs?.filter((p) => p?.program_tag?.id === e.id),
  }));

  const transform = mapped?.map((e) => ({
    group: {
      id: e.id || '',
      title: e.name || '',
      sub_title:
        data.data.programTagsEnLocale?.find((en) => en?.seo_link === e.seo_link) || [],
    },
    programs: e.programs?.map((p) => ({
      id: p?.id || '',
      header: p?.header || '',
      preview_url: ImageStrapiUrl(p?.canvas_preview?.url || ''),
      link: p?.id || '',
    })),
  })) as any; //TODO: SHIT
  return transform;
}

const BrowseProgramPage: React.FC<BrowseProgramPageProps> = (props) => {
  const data = mapProgramsPage({ data: props.data });
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
        <BrowsePrograms data={data} />
      </CommonLayout>
    </>
  );
};

export default BrowseProgramPage;
