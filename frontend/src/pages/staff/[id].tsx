import { GetServerSideProps } from 'next';

import { GetStaffQuery, GetStaffDocument } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import StaffPage from 'modules/staff/pages/StaffPage';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await client.query<GetStaffQuery>({
    query: GetStaffDocument,
    // TODO: remove this locale hardcode
    variables: { id: params?.id, locale: 'th' },
  });

  return {
    props: { data },
  };
};

export default StaffPage;
