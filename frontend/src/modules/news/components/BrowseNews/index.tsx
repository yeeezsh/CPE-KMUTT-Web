import { join } from 'path';

import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiOutlineArrowDown } from 'react-icons/hi';

import Btn from 'common/components/Button';
import Card from 'common/components/Card';
import Container from 'common/components/Container';
import { STATIC_NEWS_LINK } from 'common/constants/links';

import { useTagsCategories } from 'modules/news/hooks/useTagCategories';
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

export type TagNewsCategory = {
  title: string;
  link: string;
  active?: boolean;
};

const NewsCategoryLink: React.FC<TagNewsCategory> = (props) => (
  <Link href={props.link} scroll={false}>
    <a className={`menu-item ${props.active ? 'active' : ''}`}>{props.title}</a>
  </Link>
);

const BrowseNews: React.FC<BrowseNewsProps> = ({ data }) => {
  const router = useRouter();
  const { moreNewsData, loadMore } = useLoadMore({ initData: constants });
  const mapped = data && newsMapper(data);
  const tags = useTagsCategories(data);

  function onCardClick(newsId: string) {
    router.push(join(STATIC_NEWS_LINK, newsId));
  }
  return (
    <BrowseNewsStyle>
      <Container>
        <BrowsNewsHeader>
          {/* Tags Cateogries */}
          {tags &&
            tags.map((e) => (
              <NewsCategoryLink
                key={'NewsCategoryLink-' + e.link}
                title={e.title}
                link={e.link}
                active={e.active}
              />
            ))}
        </BrowsNewsHeader>

        <BrowseNewsRow className="space-between">
          {mapped &&
            mapped.map((e) => {
              return (
                <Card
                  onClick={() => onCardClick(e._id)}
                  key={e._id}
                  title={e.title}
                  description={e.description}
                  date={e.date}
                  thumbnail={e.thumbnail}
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
