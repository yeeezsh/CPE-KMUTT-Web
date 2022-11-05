import React from 'react';

import { GetServerSideProps } from 'next';

import { GetProgramsDocument, GetProgramsQuery } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import BrowseProgram from 'modules/programs/pages/BrowseProgram';

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

const BrowseProgramPage: React.FC<{ data: GetProgramsQuery }> = ({ data }) => (
  <BrowseProgram data={data} />
);

export default BrowseProgramPage;
