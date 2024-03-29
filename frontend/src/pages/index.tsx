import React from 'react';

import { GetServerSideProps } from 'next';

import { GetHomeDocument, GetHomeQuery } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import Home from 'modules/home/page/Home';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const { data } = await client.query<GetHomeQuery>({
    query: GetHomeDocument,
    variables: { locale },
  });
  return {
    props: { data },
  };
};

const HomePage: React.FC<{ data: GetHomeQuery }> = ({ data }) => {
  return <Home data={data} />;
};

export default HomePage;
