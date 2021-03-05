import React from 'react';

import Head from 'next/head';

import Footer from 'modules/root/components/Footer';

import { Main } from './styled';

const Home: React.FC = () => {
  const crumbNav = [
    {
      link: '/',
      title: 'หน้าแรก',
    },
    {
      link: '/',
      title: 'ประกาศ',
    },
    {
      link: '/',
      title: 'สำหรับนักศึกษาใหม่',
    },
  ];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main></Main>
    </div>
  );
};
export default Home;
