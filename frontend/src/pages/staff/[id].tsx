import { GetServerSideProps } from 'next';

import { GetStaffQuery, GetStaffDocument } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import StaffPage from 'modules/staff/pages/StaffPage';

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const { data } = await client.query<GetStaffQuery>({
    query: GetStaffDocument,
    variables: { id: params?.id, locale },
  });

  return {
    props: { data },
  };
};

export default StaffPage;
