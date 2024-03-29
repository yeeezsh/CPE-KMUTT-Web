import React from 'react';

import Head from 'next/head';
import { HiOutlineArrowRight } from 'react-icons/hi';

import { Btn } from 'common/components/Button/styled';
import Carousel from 'common/components/Carousel';
import CommonLayout from 'common/components/Layouts/CommonLayout';

import BadgeContactSection from 'modules/contact/components/BadgeContactSection';
import StaticSection from 'modules/home/components/StaticSection';
import { ButtonStyled } from 'modules/home/components/StaticSection/styled';
import WhatNewSection from 'modules/home/components/WhatNewSection';
import { HOME_CONTENTS } from 'modules/home/constants';
import { useHomeContentParser } from 'modules/home/hooks/useHomeContentParser';
import { HomesProps } from 'modules/home/page/Home/types';

import { Main } from './styled';

const Home: React.FC<HomesProps> = ({ data }) => {
  const { mainCarousal, activityAndAwardsCarousal, whatsNews } = useHomeContentParser(
    data,
  );

  return (
    <CommonLayout
      showTopBar={false}
      Header={<Carousel variant="Default" item={mainCarousal} />}>
      <Head>
        <title>หน้าแรก</title>
      </Head>
      <Main>
        <WhatNewSection data={whatsNews} />

        <StaticSection
          id="1"
          background={HOME_CONTENTS.programs.background}
          header={HOME_CONTENTS.programs.header}
          content={HOME_CONTENTS.programs.content}>
          <ButtonStyled>
            <Btn $color="primary">
              สำรวจหลักสูตรทั้งหมด
              <HiOutlineArrowRight className="Icon" style={{ marginLeft: '16px' }} />
            </Btn>
          </ButtonStyled>
          <ButtonStyled>
            <Btn $color="white">
              สมัครเข้าเรียน
              <HiOutlineArrowRight
                className="Icon"
                style={{ marginLeft: '16px' }}
                size="16px"
              />
            </Btn>
          </ButtonStyled>
        </StaticSection>
        <Carousel variant="Slider" item={activityAndAwardsCarousal} />
        <StaticSection
          id="2"
          background={HOME_CONTENTS.gallery.background}
          header={HOME_CONTENTS.gallery.header}
          content={HOME_CONTENTS.gallery.content}>
          {HOME_CONTENTS.gallery.enabledButton && (
            <ButtonStyled>
              <Btn $color="white">
                สำรวจแกลเลอรี่
                <HiOutlineArrowRight
                  className="Icon"
                  style={{ marginLeft: '16px' }}
                  size="16px"
                />
              </Btn>
            </ButtonStyled>
          )}
        </StaticSection>

        <BadgeContactSection />
      </Main>
    </CommonLayout>
  );
};
export default Home;
