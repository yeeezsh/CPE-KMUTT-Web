import Btn from 'common/components/Button';
import Carousel from 'common/components/Carousel';
import { CAROUSEL_DEFAULT_CONSTANT } from 'common/components/Carousel/constant';
import Footer from 'modules/home/components/Footer';
import StaticSection from 'modules/home/components/StaticSection';
import { ButtonStyled } from 'modules/home/components/StaticSection/styled';
import WhatNewSection from 'modules/home/components/WhatNewSection';
import Head from 'next/head';
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
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
      <Main>
        <Carousel variant="Default" item={CAROUSEL_DEFAULT_CONSTANT} />
        <WhatNewSection />
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
