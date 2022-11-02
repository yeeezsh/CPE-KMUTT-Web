import { GetServerSideProps } from 'next';

import { GetProgramsDocument, GetProgramsQuery } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import BrowseProgramPage from 'modules/programs/pages/BrowseProgramPage';

// const mock: React.FC = () => <></>;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<GetProgramsQuery>({
    query: GetProgramsDocument,
    // TODO: remove this locale hardcode
    variables: { locale: 'th' },
  });
  return {
    props: { data },
  };
};
//TODO: bind api
export default BrowseProgramPage;
