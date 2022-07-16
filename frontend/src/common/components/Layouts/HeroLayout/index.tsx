import React from 'react';

import FaqBanner from 'common/components/FaqBanner';
import Header from 'common/components/Header';

import Footer from 'modules/home/components/Footer';
import Navbar from 'modules/root/components/Navbar';

import { CommonLayoutStyle } from './styled';
import { HeroLayoutProps } from './types';

export const HeroLayout: React.FC<HeroLayoutProps> = ({
  title,
  subtitle,
  headerBackgroundImage,
  withFaqBanner,
  children,
}) => {
  return (
    <>
      <Navbar />
      <CommonLayoutStyle>
        <Header
          title={title}
          subtitle={subtitle}
          backgroundImage={headerBackgroundImage}
        />
        {children}
        {withFaqBanner && <FaqBanner />}
        <Footer />
      </CommonLayoutStyle>
    </>
  );
};

export default HeroLayout;
