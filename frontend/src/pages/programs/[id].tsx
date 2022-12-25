import { GetServerSideProps } from 'next';

import {
  GetProgramBySeoLinkDocument,
  GetProgramBySeoLinkQuery,
} from 'common/generated/generated-types';
import { client } from 'common/services/client';

import ProgramContent from 'modules/programs/pages/ProgramContent';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await client.query<GetProgramBySeoLinkQuery>({
    query: GetProgramBySeoLinkDocument,
    // TODO: remove this locale hardcode
    variables: { locale: 'th', where: { seo_link: params?.id } },
  });

  return {
    props: { data },
  };
};

const ProgramContentPage: React.FC<{ data: GetProgramBySeoLinkQuery }> = ({ data }) => {
  return <ProgramContent data={data} />;
};

export default ProgramContentPage;