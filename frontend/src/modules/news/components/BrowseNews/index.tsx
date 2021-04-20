import Btn from 'common/components/Button';
import Card from 'common/components/Card';
import Container from 'common/components/Container';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiOutlineArrowDown, HiOutlineArrowRight } from 'react-icons/hi';
import { constants } from './constant';
import {
  AnnouceFAQ,
  BrowseNewsColumn,
  BrowseNewsRow,
  BrowseNewsSeeMore,
  BrowseNewsStyle,
  BrowsNewsHeader,
  FAQButton,
  FAQContent,
  FAQHeader,
} from './styled';
import { BrowseNewsProps, cardConstantsProps } from './types';

const NewsCategoryLink: React.FC<{ title: string; link: string; active?: boolean }> = (
  props,
) => (
  <Link href={props.link}>
    <a className={`menu-item ${props.active ? 'active' : ''}`}>{props.title}</a>
  </Link>
);

const BrowseNews: React.FC<BrowseNewsProps> = () => {
  const [newsData, setNewsData] = useState<cardConstantsProps[]>([]);
  const [newsPerPage, setNewsPerPage] = useState(9);

  useEffect(() => {
    setNewsData(constants);
  }, []);

  const checkAmountPost = () => {
    if (newsPerPage < newsData.length) return false;
    else return true;
  };

  const loadMore = () => {
    setNewsPerPage(newsPerPage + 3);
  };

  return (
    <BrowseNewsStyle>
      <Container>
        <BrowsNewsHeader>
          {/* NavBar */}
          <NewsCategoryLink title="สำหรับนักศึกษาใหม่" link="/" active={true} />
          <NewsCategoryLink title="สำหรับนักศึกษาปัจจุบัน" link="/" active={true} />
          <NewsCategoryLink title="กิจกรรมนักศึกษา" link="/" active={true} />
          <NewsCategoryLink title="ทุนการศึกษา" link="/" active={true} />
        </BrowsNewsHeader>

        <BrowseNewsRow className="space-between">
          {newsData.slice(0, newsPerPage).map((data, index) => {
            return (
              <Card
                key={index}
                title={data.title}
                description={data.description}
                date={data.date}
                links={data.links}
                id={data.id}
                variant={data.variant}
              />
            );
          })}
        </BrowseNewsRow>

        <BrowseNewsSeeMore>
          <Btn $color={'transparent'} $hidden={checkAmountPost()} onClick={loadMore}>
            แสดงเก่ากว่านี้
            <HiOutlineArrowDown
              className="Icon"
              style={{ marginLeft: '16px' }}
              size="16px"
            />
          </Btn>
        </BrowseNewsSeeMore>
      </Container>
      <AnnouceFAQ>
        <BrowseNewsRow className="align-center">
          <BrowseNewsColumn>
            <FAQHeader>มีคำถามหรือข้อสงสัย</FAQHeader>
            <FAQContent>เซ็นเตอร์เวิร์คฟลุทแอดมิสชันออร์แกน</FAQContent>
            <FAQButton>
              <Btn $color={'transparent'}>
                ติดต่อเรา
                <HiOutlineArrowRight
                  className="Icon"
                  style={{ marginLeft: '16px' }}
                  size="16px"
                />
              </Btn>
            </FAQButton>
          </BrowseNewsColumn>
          <BrowseNewsColumn>
            <img src="/images/annouce_faq.png" alt="" />
          </BrowseNewsColumn>
        </BrowseNewsRow>
      </AnnouceFAQ>
    </BrowseNewsStyle>
  );
};

export default BrowseNews;
