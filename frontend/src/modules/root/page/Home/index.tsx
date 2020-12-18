import Container from 'common/components/Container';
import Carousel from 'components/Carousel';
import { CarouselProps } from 'components/Carousel/types'; // For the example below
import Navbar from 'modules/root/components/Navbar';
import Head from 'next/head';
import React from 'react';
import { Main } from './styled';

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
    <>
      <Navbar />
      <Carousel item={ARRAY} />

      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main></Main>
      </Container>
    </>
  );
};

export default Home;
