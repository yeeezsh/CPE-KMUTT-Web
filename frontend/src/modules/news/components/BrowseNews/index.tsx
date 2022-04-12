import React from 'react';

import Link from 'next/link';
import { HiOutlineArrowDown } from 'react-icons/hi';

import Btn from 'common/components/Button';
import Card from 'common/components/Card';
import Container from 'common/components/Container';

import { newsMapper } from 'modules/news/utils/newsMapper';

import { constants } from './constant';
import {
  BrowseNewsRow,
  BrowseNewsSeeMore,
  BrowseNewsStyle,
  BrowsNewsHeader,
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

const BrowseNews: React.FC<BrowseNewsProps> = ({ data }) => {
  const { moreNewsData, loadMore } = useLoadMore({ initData: constants });
  const mapped = data && newsMapper(data);
  return (
    <BrowseNewsStyle>
      <Container>
        <BrowsNewsHeader>
          {/* NavBar */}
          <NewsCategoryLink title="ทั้งหมด" link="/" active={true} />
          <NewsCategoryLink title="สำหรับนักศึกษาใหม่" link="/" />
          <NewsCategoryLink title="สำหรับนักศึกษาปัจจุบัน" link="/" />
          <NewsCategoryLink title="กิจกรรมนักศึกษา" link="/" />
          <NewsCategoryLink title="ทุนการศึกษา" link="/" />
        </BrowsNewsHeader>

        <BrowseNewsRow className="space-between">
          {mapped &&
            mapped.map((e) => {
              return (
                <Card
                  key={e._id}
                  title={e.title}
                  description={e.description}
                  date={e.date}
                  links={e.link}
                  id={e._id}
                  variant={e.variant}
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
    </BrowseNewsStyle>
  );
};

export default BrowseNews;
