import React from 'react';

import { useRouter } from 'next/router';
import { HiOutlineArrowRight } from 'react-icons/hi';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import { CardProps } from 'common/components/Card/types';
import Container from 'common/components/Container';
import { STATIC_NEWS_ID_LINK, STATIC_NEWS_ID_LINK_PATTERN } from 'common/constants/links';

import {
  CardContainer,
  PortletDiscription,
  PortletTitle,
  PortletTitleHeader,
  ShowAllButton,
  WhatNewStyle,
} from './styled';

export type WhatNewSectionProps = { data?: CardProps[] };

const WhatNewSection: React.FC<WhatNewSectionProps> = ({ data }) => {
  const router = useRouter();

  function onCardClick(url?: string) {
    url && router.push(STATIC_NEWS_ID_LINK.replace(STATIC_NEWS_ID_LINK_PATTERN, url));
  }

  return (
    <WhatNewStyle>
      <Container>
        <PortletTitle>
          <PortletTitleHeader>มีอะไรใหม่</PortletTitleHeader>
          <PortletDiscription>
            สำรวจประกาศเกี่ยวกับการรับเข้าศึกษา กิจกรรม และข่าวสารล่าสุด
          </PortletDiscription>
          <ShowAllButton>
            <Button $color="borderless">
              แสดงทั้งหมด
              <HiOutlineArrowRight
                className="Icon"
                style={{ marginLeft: '15px' }}
                size="20px"
              />
            </Button>
          </ShowAllButton>
        </PortletTitle>

        {data && (
          <CardContainer>
            {data.map((el, index) => (
              <Card
                key={index}
                title={el.title}
                description={el.description}
                date={el.date}
                thumbnail={el.thumbnail}
                id={el.id}
                variant={el.variant}
                onClick={() => onCardClick(el.id)}
              />
            ))}
          </CardContainer>
        )}
      </Container>
    </WhatNewStyle>
  );
};

export default WhatNewSection;
