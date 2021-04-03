import Btn from 'common/components/Button';
import Card from 'common/components/Card';
import Container from 'common/components/Container';
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

const BrowseNews: React.FC<BrowseNewsProps> = () => {
  const [param, setParam] = useState<cardConstantsProps[]>([]);
  const [postsPerPage, setPostsPerPage] = useState(9);

  useEffect(() => {
    setParam(constants);
  }, []);

  const checkAmountPost = () => {
    if (postsPerPage < param.length) return false;
    else return true;
  };

  const loadMore = () => {
    setPostsPerPage(postsPerPage + 3);
  };

  return (
    <BrowseNewsStyle>
      <Container>
        <BrowsNewsHeader>
          <a href="/" className="menu-item active">
            สำหรับนักศึกษาใหม่
          </a>
          <a href="/" className="menu-item">
            สำหรับนักศึกษาปัจจุบัน
          </a>
          <a href="/" className="menu-item">
            กิจกรรมนักศึกษา
          </a>
          <a href="/" className="menu-item">
            ทุนการศึกษา
          </a>
        </BrowsNewsHeader>
        <BrowseNewsRow className="space-between">
          {param.slice(0, postsPerPage).map((data, index) => {
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
