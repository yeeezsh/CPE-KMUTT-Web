import React from 'react';

import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { VscFilePdf } from 'react-icons/vsc';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import Container from 'common/components/Container';

import { constants } from 'modules/news/components/NewsContent/constant';

import {
  NewsContentTumbnail,
  NewsContentContainer,
  NewsContentFileConteiner,
  NewsContentFileHeader,
  NewsContentFileList,
  NewsContentFileName,
  NewsContentFileNameContainer,
  NewsContentHeader,
  NewsContentPostDate,
  NewsContentStyle,
  OtherNewsContainer,
  OtherNewsHeaderContainer,
  OtherNewsHeader,
  OtherNewsCardContainer,
} from './styled';
import { NewsContentProps } from './types';

const NewsContent: React.FC<NewsContentProps> = (props) => {
  return (
    <NewsContentStyle>
      <Container>
        <NewsContentHeader>
          ประกาศรายชื่อผู้มีสิทธิ์สอบสัมภาษณ์ โครงการ Active Recruitment รอบที่ 2
        </NewsContentHeader>
        <NewsContentPostDate>วันที่ 12 สิงหาคม 2563</NewsContentPostDate>
        <NewsContentTumbnail
          style={{
            backgroundImage: `url(${props.tumbnail})`,
          }}
        />
        <NewsContentContainer>
          ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
          มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เริ่มก่อตั้ง
          และเปิดสอนในระดับปริญญาตรีตั้งแต่ปีการศึกษา 2531
          แต่ได้รับการอนุมัติให้จัดตั้งหน่วยงาน ภาควิชาวิศวกรรมคอมพิวเตอร์
          และประกาศในพระราชกฤษฎีกา เมื่อวันที่ 11 กุมภาพันธ์ 2540
          ภาควิชาวิศวกรรมคอมพิวเตอร์ เปิดสอนทั้งในระดับปริญญาตรี ปริญญาโท และปริญญาเอก
          โดยในระดับปริญญาตรี แบ่งเป็น 2 หลักสูตร คือ หลักสูตรวิศวกรรมศาสตรบัณฑิต
          สาขาวิชาวิศวกรรมคอมพิวเตอร์(ปกติ) และหลักสูตรวิศวกรรมศาสตรบัณฑิต
          สาขาวิศวกรรมคอมพิวเตอร์ (หลักสูตรนานาชาติ) ส่วนในระดับปริญญาโท คือ
          หลักสูตรวิศวกรรมศาสตรมหาบัณฑิต และวิทยาศาสตรมหาบัณฑิต
          สาขาวิชาวิศวกรรมคอมพิวเตอร์ และในระดับปริญญาเอก คือ หลักสูตรปรัชญาดุษฎีบัณฑิต
          สาขาวิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์
        </NewsContentContainer>
        <NewsContentFileConteiner>
          <NewsContentFileHeader>ไฟล์แนบ (4)</NewsContentFileHeader>
          <NewsContentFileList>
            <NewsContentFileNameContainer>
              <VscFilePdf style={{ marginRight: '16px' }} color="#DD2025" size="24px" />
              <NewsContentFileName>CPE2021_AR_0.pdf</NewsContentFileName>
            </NewsContentFileNameContainer>
            <Link href="/news/">ดาวน์โหลด</Link>
          </NewsContentFileList>
          <NewsContentFileList>
            <NewsContentFileNameContainer>
              <VscFilePdf style={{ marginRight: '16px' }} color="#DD2025" size="24px" />
              <NewsContentFileName>CPE2021_AR_0.pdf</NewsContentFileName>
            </NewsContentFileNameContainer>
            <Link href="/news/">ดาวน์โหลด</Link>
          </NewsContentFileList>
        </NewsContentFileConteiner>
        <OtherNewsContainer>
          <OtherNewsHeaderContainer>
            <OtherNewsHeader>ประกาศอื่นๆ</OtherNewsHeader>
            <Button $color="borderless">
              แสดงทั้งหมด
              <HiOutlineArrowRight
                className="Icon"
                style={{ marginLeft: '15px' }}
                size="20px"
              />
            </Button>
          </OtherNewsHeaderContainer>
          <OtherNewsCardContainer>
            {constants.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                description={data.description}
                date={data.date}
                links={data.links}
                id={data.id}
                variant={data.variant}
              />
            ))}
          </OtherNewsCardContainer>
        </OtherNewsContainer>
      </Container>
    </NewsContentStyle>
  );
};

export default NewsContent;
