import { GetServerSideProps } from 'next';

import AboutUs from 'modules/about-us/page/AboutUs';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.params;

  return {
    props: {
      id,
    },
  };
};

export default AboutUs;
