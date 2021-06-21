import React from 'react';

import Head from 'next/head';

import Carousel from 'common/components/Carousel';
import {
  CAROUSEL_DEFAULT_CONSTANT,
  CAROUSEL_SLIDER_CONSTANT,
} from 'common/components/Carousel/constant';

import { Main } from './styled';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Carousel variant="Default" item={CAROUSEL_DEFAULT_CONSTANT} />
        <Carousel variant="Slider" item={CAROUSEL_SLIDER_CONSTANT} />
      </Main>
    </div>
  );
};
export default Home;
