import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import 'antd/dist/antd.css';
import 'keen-slider/keen-slider.min.css';

import { CarouselProps, CarouselItem } from './types';

import Carousel from '.';

export default {
  title: 'common/components/Carousel',
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;
const sampleItem: CarouselItem[] = [
  {
    id: 0,
    picture: 'https://www.nicepng.com/png/detail/95-953450_man-man-with-laptop-png.png',
    heading: 'วิศวะคอมบางมดไม่ใช่สถานที่',
    caption:
      'เซ็นเตอร์เวิร์คฟลุทแอดมิสชันออร์แกน ใช้งานรูบิค แซมบ้าเมาท์ แอดมิชชั่นคัตเอาต์โครนาโอ้ยเซ็นเซอร์ ผู้นำเมจิควิทย์ บลอนด์แทคติคไอซียูเยลลี่ บอดี้มยุราภิรมย์ดัมพ์ฟินิกซ์ ฮิปฮอปเทรนด์บราคันถธุระ',
    link: '#',
  },
  {
    id: 1,
    picture: 'https://static.bangkokpost.com/media/content/20190306/3122160.jpg',
    heading: 'ทีมอะไรไม่รู้คว้าแชมป์ NSC',
    caption:
      'Microsoft ได้จัดการแข่งขันประจำปีขึ้น ระหว่างวันที่ 10-14 กุมภาพันธุ์ 2562 เพื่อเป็นการคัดเลือกตัวแทนจาก Asia เพื่อไปชิงความเป็นหนึ่งในระดับโลก โดย Marker Playground ทีมของนักศึกษาวิศวกรรมคอมพิวเตอร์ได้รับคัดเลือกให้เป็นตัวแทน จากประเทศไทยเพียงหนึ่งเดียว ให้เข้าร่วมการแข่งขันในงาน imagine Cup 2019 ในรอบ Asia Regional Final นี้ เมกเกอร์เพลย์กราวน์ เป็นซอฟต์แวร์สำหรับพัฒนาระบบสมองกลฝังตัวแบบครบวงจร ตั้งแต่ขั้นตอนของการเขียนโปรแกรม, การออกแบบและเชื่อมต่อวงจร รวมถึงการอัพโหลดโปรแกรมไปยังบอร์ดไมโครคอนโทรลเลอร์ เพื่อสร้างเป็นชิ้นงานที่สามารถใช้งานได้จริง ตัวซอฟต์แวร์รองรับอุปกรณ์จากหลากหลายผู้ผลิต อาทิ บอร์ดทดลองของบริษัท Sparkfun, Adafruit, Microbit, Kidbright และ ชุดอุปกรณ์ของเมกเกอร์เพลย์กราวน์ โดยมีจุดเด่นอยู่ที่การเขียนโปรแกรม โดยใช้แผนภาพหรือไดอะแกรม ซึ่งทำความเข้าใจได้ง่ายสำหรับผู้เริ่มต้น แต่ยังคงความยืดหยุ่นเพื่อให้สามารถสร้างงานที่ซับซ้อนได้ นอกจากนี้ ซอฟต์แวร์เมกเกอร์เพลย์กราวน์ยังสามารถสร้างโค้ดโปรแกรมสำหรับบอร์ดรุ่นต่างๆ ได้จากไดอะแกรมเดียวกัน ทำให้ผู้ใช้ไม่จำเป็นต้องเรียนรู้และเขียนโปรแกรมใหม่ทั้งหมดเมื่อเปลี่ยนรุ่นหรือยี่ห้อของบอร์ดไมโครคอนโทรลเลอร์',
    link: '#',
  },
];

export const Default = Template.bind({});
Default.args = {
  item: sampleItem,
  variant: 'Default',
  fullText: false,
  arrows: true,
};

export const Slider = Template.bind({});
Slider.args = {
  item: sampleItem,
  variant: 'Slider',
  fullText: false,
  arrows: false,
};
