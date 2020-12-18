<<<<<<< HEAD
import Btn from 'common/components/Button';
import Footer from 'modules/root/components/Footer';
import Navbar from 'modules/root/components/Navbar';
import StaticSection from 'modules/root/components/StaticSection';
import { ButtonStyled } from 'modules/root/components/StaticSection/styled';
import WhatNewSection from 'modules/root/components/WhatNewSection';
=======
import Container from 'common/components/Container';
import Carousel from 'components/Carousel';
import { CarouselProps } from 'components/Carousel/types'; // For the example below
<<<<<<< HEAD
>>>>>>> Add carousel to home page
import Head from 'next/head';
import React from 'react';
<<<<<<< HEAD
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Main } from './styled';
=======
import { Container, Main } from './styled';
>>>>>>> Fixed navbar
=======
import Head from 'next/head';
import React from 'react';
import { Main, Title } from './styled';
>>>>>>> Revert "Merge branch 'CKW-6' of https://github.com/yee2542/CPE-KMUTT-Web into CKW-9"

//Example props for Carousel
const ARRAY: CarouselProps[] = [
  {
    id: '1',
    picture:
      'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    heading: 'ทีมอะไรไม่รู้คว้าแชมป์ NSC',
    caption:
      'Microsoft ได้จัดการแข่งขันประจำปีขึ้น ระหว่างวันที่ 10-14 กุมภาพันธุ์ 2562 เพื่อเป็นการคัดเลือกตัวแทนจาก Asia เพื่อไปชิงความเป็นหนึ่งในระดับโลก โดย Marker Playground ทีมของนักศึกษาวิศวกรรมคอมพิวเตอร์ได้รับคัดเลือกให้เป็นตัวแทน จากประเทศไทยเพียงหนึ่งเดียว ให้เข้าร่วมการแข่งขันในงาน imagine Cup 2019 ในรอบ Asia Regional Final นี้ เมกเกอร์เพลย์กราวน์ เป็นซอฟต์แวร์สำหรับพัฒนาระบบสมองกลฝังตัวแบบครบวงจร ตั้งแต่ขั้นตอนของการเขียนโปรแกรม, การออกแบบและเชื่อมต่อวงจร รวมถึงการอัพโหลดโปรแกรมไปยังบอร์ดไมโครคอนโทรลเลอร์ เพื่อสร้างเป็นชิ้นงานที่สามารถใช้งานได้จริง ตัวซอฟต์แวร์รองรับอุปกรณ์จากหลากหลายผู้ผลิต อาทิ บอร์ดทดลองของบริษัท Sparkfun, Adafruit, Microbit, Kidbright และ ชุดอุปกรณ์ของเมกเกอร์เพลย์กราวน์ โดยมีจุดเด่นอยู่ที่การเขียนโปรแกรม โดยใช้แผนภาพหรือไดอะแกรม ซึ่งทำความเข้าใจได้ง่ายสำหรับผู้เริ่มต้น แต่ยังคงความยืดหยุ่นเพื่อให้สามารถสร้างงานที่ซับซ้อนได้ นอกจากนี้ ซอฟต์แวร์เมกเกอร์เพลย์กราวน์ยังสามารถสร้างโค้ดโปรแกรมสำหรับบอร์ดรุ่นต่างๆ ได้จากไดอะแกรมเดียวกัน ทำให้ผู้ใช้ไม่จำเป็นต้องเรียนรู้และเขียนโปรแกรมใหม่ทั้งหมดเมื่อเปลี่ยนรุ่นหรือยี่ห้อของบอร์ดไมโครคอนโทรลเลอร์',
    tag: 'รางวัลและความสำเร็จ',
    links: ['#'],
  },
  { id: '2', picture: '', heading: 'TWO', caption: 'second' },
  {
    id: '3',
    picture: '',
    heading: 'THREE',
    caption: 'third one',
    links: ['#'],
  },
];

const Home: React.FC = () => {
  return (
<<<<<<< HEAD
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Navbar />
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        <Main>
          {/* <Title>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Title> */}
        </Main>
=======
        <Main></Main>
>>>>>>> Fixed navbar
      </Container>
    </>
>>>>>>> Fix navbar
=======
    <>
      <Carousel item={ARRAY} />

      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <Title>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Title>
        </Main>
      </Container>
    </>
>>>>>>> Add carousel to home page
  );
};
export default Home;
