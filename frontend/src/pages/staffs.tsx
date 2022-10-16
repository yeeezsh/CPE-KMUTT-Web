import { GetServerSideProps } from 'next';

import { GetStaffsDocument, GetStaffsQuery } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import StaffsPage from 'modules/staff/pages/StaffsPage';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await client.query<GetStaffsQuery>({
    query: GetStaffsDocument,
    // TODO: remove this locale hardcode
    variables: { Id: params?.id, locale: 'th' },
  });
  return {
    props: { data },
  };
};

const _StaffsPage: React.FC<{ data: GetStaffsQuery }> = ({ data }) => {
  return <StaffsPage data={data} />;
};

export default _StaffsPage;
