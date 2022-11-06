import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { VscFilePdf } from 'react-icons/vsc';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import Container from 'common/components/Container';
import CardsLayout from 'common/components/Layouts/CardsLayout';
import {
  STATIC_NEWS_ID_LINK,
  STATIC_NEWS_ID_LINK_PATTERN,
  STATIC_NEWS_LINK,
} from 'common/constants/links';

import {
  NewsContentTumbnail,
  NewsContentFileContainer,
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
} from './styled';
import { NewsContentProps } from './types';

const NewsContent: React.FC<NewsContentProps> = (props) => {
  const router = useRouter();

  function gotoAllNews() {
    router.push(STATIC_NEWS_LINK);
  }

  function onCardClick(newsId: string) {
    router.push(STATIC_NEWS_ID_LINK.replace(STATIC_NEWS_ID_LINK_PATTERN, newsId));
  }

  return (
    <NewsContentStyle>
      <Container>
        <NewsContentHeader>{props.title}</NewsContentHeader>
        <NewsContentPostDate>{props.postDate}</NewsContentPostDate>

        {/* canvas */}
        {props.tumbnail && (
          <NewsContentTumbnail
            style={{
              backgroundImage: `url(${props.tumbnail})`,
            }}
          />
        )}

        {/* dyanmic contents */}
        {props.contents}

        {/* files & download */}
        {props.file && (
          <NewsContentFileContainer>
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
          </NewsContentFileContainer>
        )}

        {/* connections */}
        {props.connections && (
          <OtherNewsContainer>
            <OtherNewsHeaderContainer>
              <OtherNewsHeader>ประกาศอื่นๆ</OtherNewsHeader>
              <Button $color="borderless" onClick={gotoAllNews}>
                แสดงทั้งหมด
                <HiOutlineArrowRight
                  className="Icon"
                  style={{ marginLeft: '15px' }}
                  size="20px"
                />
              </Button>
            </OtherNewsHeaderContainer>
            <CardsLayout>
              {props.connections.map((data) => (
                <Card
                  onClick={() => onCardClick(data.id)}
                  key={'news-connections-' + data.id}
                  title={data.title}
                  description={data.description}
                  date={data.date}
                  thumbnail={data.thumbnail}
                  id={data.id}
                  variant={data.variant}
                />
              ))}
            </CardsLayout>
          </OtherNewsContainer>
        )}
      </Container>
    </NewsContentStyle>
  );
};

export default NewsContent;
