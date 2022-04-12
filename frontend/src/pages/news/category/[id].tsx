import { GetServerSideProps } from 'next';

import { DEFAULT_STATIC_NEWS_CATEGORY_LINK } from 'common/constants/links';
import {
  GetNewsByTagSeoLinkDocument,
  GetNewsByTagSeoLinkQuery,
} from 'common/generated/generated-types';
import { client } from 'common/services/client';

import BrowseNewsPage from 'modules/news/page/BrowseNewsPage';
import { DEFAULT_START_N_OF_NEWS, FIRST_N_OF_NEWS } from 'modules/news/reducers';

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
  const start = Number(query.start) || DEFAULT_START_N_OF_NEWS;
  const limit = Number(query.limit) || FIRST_N_OF_NEWS;
  const id = params?.id;

  const apiQuery =
    id === DEFAULT_STATIC_NEWS_CATEGORY_LINK
      ? {}
      : {
          tags: {
            seo_link: String(id),
          },
        };

  const { data } = await client.query<GetNewsByTagSeoLinkQuery>({
    query: GetNewsByTagSeoLinkDocument,
    variables: {
      offset: start,
      limit,
      where: apiQuery,
    },
  });
  console.log(data);
  return {
    props: { data },
  };
};

const NewsCategoryPages: React.FC<{ data: GetNewsByTagSeoLinkQuery }> = ({ data }) => {
  return (
    <>
      <BrowseNewsPage data={data} />
    </>
  );
};

export default NewsCategoryPages;
