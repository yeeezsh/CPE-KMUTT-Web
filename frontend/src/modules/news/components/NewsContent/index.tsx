import React from 'react';

import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { VscFilePdf } from 'react-icons/vsc';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import Container from 'common/components/Container';
import { STATIC_NEWS_LINK } from 'common/constants/links';

import {
  NewsContentTumbnail,
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
        <NewsContentHeader>{props.title}</NewsContentHeader>
        <NewsContentPostDate>{props.postDate}</NewsContentPostDate>
        <NewsContentTumbnail
          style={{
            backgroundImage: `url(${props.tumbnail})`,
          }}
        />

        {/* dyanmic contents */}
        {props.contents}

        {/* files & download */}
        {props.file && (
          <NewsContentFileConteiner>
            <NewsContentFileHeader>ไฟล์แนบ ({props.file?.length})</NewsContentFileHeader>
            {props.file?.map((data, index) => (
              <NewsContentFileList key={index}>
                <NewsContentFileNameContainer>
                  <VscFilePdf
                    style={{ marginRight: '16px' }}
                    color="#DD2025"
                    size="24px"
                  />
                  <NewsContentFileName>{data.title}</NewsContentFileName>
                </NewsContentFileNameContainer>
                <Link href={data.link ?? '/'}>ดาวน์โหลด</Link>
              </NewsContentFileList>
            ))}
          </NewsContentFileConteiner>
        )}

        {/* connections */}
        {props.connections && (
          <OtherNewsContainer>
            <OtherNewsHeaderContainer>
              <OtherNewsHeader>ประกาศอื่นๆ</OtherNewsHeader>
              <Link href={STATIC_NEWS_LINK}>
                <Button $color="borderless">
                  แสดงทั้งหมด
                  <HiOutlineArrowRight
                    className="Icon"
                    style={{ marginLeft: '15px' }}
                    size="20px"
                  />
                </Button>
              </Link>
            </OtherNewsHeaderContainer>
            <OtherNewsCardContainer>
              {props.connections.map((data) => (
                <Card
                  key={'news-connections-' + data.id}
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
        )}
      </Container>
    </NewsContentStyle>
  );
};

export default NewsContent;
