import { GetServerSideProps } from 'next';

import AboutUs from 'modules/about-us/page/AboutUs';

export const getServerSideProps: GetServerSideProps = async () => {
  // const { id } = context.params;

  return {
    props: {
      id: `history`,
    },
  };
};

export default AboutUs;
