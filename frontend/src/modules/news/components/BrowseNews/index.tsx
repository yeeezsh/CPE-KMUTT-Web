import Btn from 'common/components/Button';
import Card from 'common/components/Card';
import Container from 'common/components/Container';
import Link from 'next/link';
import React from 'react';
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
import { BrowseNewsProps } from './types';
import useLoadMore from './useLoadMore';

const NewsCategoryLink: React.FC<{ title: string; link: string; active?: boolean }> = (
  props,
) => (
  <Link href={props.link}>
    <a className={`menu-item ${props.active ? 'active' : ''}`}>{props.title}</a>
  </Link>
);

const BrowseNews: React.FC<BrowseNewsProps> = () => {
  const { newsData, moreNewsData, loadMore } = useLoadMore({ initData: constants });

  return (
    <BrowseNewsStyle>
      <Container>
        <BrowsNewsHeader>
          {/* NavBar */}
          <NewsCategoryLink title="สำหรับนักศึกษาใหม่" link="/" active={true} />
          <NewsCategoryLink title="สำหรับนักศึกษาปัจจุบัน" link="/" />
          <NewsCategoryLink title="กิจกรรมนักศึกษา" link="/" />
          <NewsCategoryLink title="ทุนการศึกษา" link="/" />
        </BrowsNewsHeader>

        <BrowseNewsRow className="space-between">
          {newsData.map((data, index) => {
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
          <Btn $color={'transparent'} $hidden={moreNewsData} onClick={loadMore}>
            แสดงเก่ากว่านี้
            <HiOutlineArrowDown
              className="Icon"
              style={{ marginLeft: '16px' }}
              size="16px"
            />
          </Btn>
        </BrowseNewsSeeMore>
      </Container>

      {/* TODO: remove this FAQ  */}
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
