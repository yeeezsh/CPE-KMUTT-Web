import { GetServerSideProps } from 'next';

import { GetNewsByIdDocument, GetNewsByIdQuery } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import NewsContentPage from 'modules/news/page/NewsContentPage';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await client.query<GetNewsByIdQuery>({
    query: GetNewsByIdDocument,
    // TODO: remove this locale hardcode
    variables: { Id: params?.id, LocaleConnection: 'th' },
  });
  return {
    props: { data },
  };
};

const NewsPageId: React.FC<{ data: GetNewsByIdQuery }> = ({ data }) => {
  return <NewsContentPage data={data} />;
};

export default NewsPageId;
