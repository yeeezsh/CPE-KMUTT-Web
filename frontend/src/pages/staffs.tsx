import { GetServerSideProps } from 'next';

import { GetStaffsDocument, GetStaffsQuery } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import StaffsPage from 'modules/staff/pages/StaffsPage';

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const { data } = await client.query<GetStaffsQuery>({
    query: GetStaffsDocument,
    variables: { Id: params?.id, locale },
  });
  return {
    props: { data },
  };
};

const _StaffsPage: React.FC<{ data: GetStaffsQuery }> = ({ data }) => {
  return <StaffsPage data={data} />;
};

export default _StaffsPage;
