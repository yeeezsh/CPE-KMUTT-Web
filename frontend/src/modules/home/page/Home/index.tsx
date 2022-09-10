import React from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import { HiOutlineArrowRight } from 'react-icons/hi';

import { Btn } from 'common/components/Button/styled';

import { ButtonStyled } from 'modules/home/components/StaticSection/styled';
import { useHomeContentParser } from 'modules/home/hooks/useHomeContentParser';
import { HomesProps } from 'modules/home/page/Home/types';

import { Main } from './styled';

const DynamicNavbar = dynamic(() => import('modules/root/components/Navbar'));
const DynamicCarousel = dynamic(() => import('common/components/Carousel'));
const DynamicWhatNewSection = dynamic(
  () => import('modules/home/components/WhatNewSection'),
);
const DynamicStaticSection = dynamic(
  () => import('modules/home/components/StaticSection'),
);
const DynamicFooter = dynamic(() => import('modules/home/components/Footer'));

const Home: React.FC<HomesProps> = ({ data }) => {
  const { mainCarousal, activityAndAwardsCarousal, whatsNews } = useHomeContentParser(
    data,
  );

  return (
    <div>
      <Head>
        <title>หน้าแรก</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicNavbar />
      <Main>
        <DynamicCarousel variant="Default" item={mainCarousal} />

        <DynamicWhatNewSection data={whatsNews} />

        <DynamicStaticSection
          id="1"
          background="/images/static_bg_curriculum.png"
          header="ที่วิศวกรรมคอมพิวเตอร์ มจธ. เรามีหลักสูตรหลากหลาย"
          content="เซ็นเตอร์เวิร์คฟลุทแอดมิสชันออร์แกน ใช้งานรูบิค แซมบ้าเมาท์
          แอดมิชชั่นคัตเอาต์โครนาโอ้ยเซ็นเซอร์ ผู้นำเมจิควิทย์ บลอนด์แทคติคไอซียูเยลลี่">
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
        </DynamicStaticSection>

        <DynamicCarousel variant="Slider" item={activityAndAwardsCarousal} />

        <DynamicStaticSection
          id="2"
          background="/images/static_bg_gallery.png"
          header="แกลเลอรี่รูปภาพ"
          content="โดยมีอาจารย์ผู้สอนเป็นผู้ให้คำปรึกษา นักศึกษาต้องทำงานเป็นกลุ่ม และมีการนำเสนอผลงาน ของตนเองให้เพื่อนๆ ร่วมกันวิเคราะห์และวิจารณ์อย่างมีเหตุผล">
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
        </DynamicStaticSection>
        <DynamicFooter key="1"></DynamicFooter>
      </Main>
    </div>
  );
};
export default Home;
