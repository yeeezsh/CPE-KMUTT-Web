import React from 'react';

import Head from 'next/head';
import { HiOutlineArrowRight } from 'react-icons/hi';

import { Btn } from 'common/components/Button/styled';
import Carousel from 'common/components/Carousel';
import useIsMobileDisplay from 'common/hooks/useIsMobileDisplay';

import Footer from 'modules/home/components/Footer';
import StaticSection from 'modules/home/components/StaticSection';
import { ButtonStyled } from 'modules/home/components/StaticSection/styled';
import WhatNewSection from 'modules/home/components/WhatNewSection';
import { useHomeContentParser } from 'modules/home/hooks/useHomeContentParser';
import { HomesProps } from 'modules/home/page/Home/types';
import Navbar from 'modules/root/components/Navbar';

import { Main } from './styled';

const Home: React.FC<HomesProps> = ({ data }) => {
  const isMobile = useIsMobileDisplay();
  const { mainCarousal, activityAndAwardsCarousal, whatsNews } = useHomeContentParser(
    data,
  );

  const showForMobile = isMobile;
  const showForDesktop = !isMobile;

  return (
    <div>
      <Head>
        <title>หน้าแรก</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main>
        <Carousel variant="Default" item={mainCarousal} />

        <WhatNewSection data={whatsNews} />

        <StaticSection
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
        </StaticSection>
        <Carousel variant="Slider" item={activityAndAwardsCarousal} />
        <StaticSection
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
        </StaticSection>
        <Footer key="1"></Footer>
      </Main>
    </div>
  );
};
export default Home;
