import { GetServerSideProps } from 'next';

import { GetContactDocument, GetContactQuery } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import ContactUs from 'modules/contact/pages/ContactUs';

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<GetContactQuery>({ query: GetContactDocument });
  return {
    props: { data },
  };
};

export default ContactUs;
