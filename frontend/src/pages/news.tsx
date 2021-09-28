import { useSelector } from 'react-redux';

import { GetServerSideProps } from 'next';

import { GetNewsDocument, GetNewsQuery } from 'common/generated/generated-types';
import { client } from 'common/services/client';
import { StoresState } from 'common/stores';

import BrowseNewsPage from 'modules/news/page/BrowseNewsPage';
import { DEFAULT_START_N_OF_NEWS, FIRST_N_OF_NEWS } from 'modules/news/reducers';

// TODO: implement data api to compoenents
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const start = Number(query.start) || DEFAULT_START_N_OF_NEWS;
  const limit = Number(query.limit) || FIRST_N_OF_NEWS;
  const { data, loading } = await client.query<GetNewsQuery>({
    query: GetNewsDocument,
    variables: { offset: start, limit },
  });
  return {
    props: { data },
  };
};

const NewsPages: React.FC<{ data: GetNewsQuery }> = ({ data }) => {
  return <BrowseNewsPage data={data} />;
};

export default NewsPages;
