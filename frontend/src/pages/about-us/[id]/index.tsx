import { GetServerSideProps } from 'next';

import AboutUs from 'modules/about-us/page/AboutUs';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  return {
    props: {
      id,
    },
  };
};

export default AboutUs;
