import React from 'react';

import { useRouter } from 'next/router';
import { HiOutlineArrowRight } from 'react-icons/hi';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import { CardProps } from 'common/components/Card/types';
import Container from 'common/components/Container';
import CardsLayout from 'common/components/Layouts/CardsLayout';
import {
  STATIC_NEWS_CATEGORY_LINK,
  STATIC_NEWS_ID_LINK,
  STATIC_NEWS_ID_LINK_PATTERN,
} from 'common/constants/links';
import useIsMobileDisplay from 'common/hooks/useIsMobileDisplay';

import {
  PortletDiscription,
  PortletTitle,
  PortletTitleHeader,
  PortletTextWrapper,
  ShowAllButton,
  WhatNewStyle,
} from './styled';

export type WhatNewSectionProps = { data?: CardProps[] };

const WhatNewSection: React.FC<WhatNewSectionProps> = ({ data }) => {
  const isMobile = useIsMobileDisplay();
  const router = useRouter();

  const showForMobile = isMobile;
  const showForDesktop = !isMobile;

  function onCardClick(url?: string) {
    url && router.push(STATIC_NEWS_ID_LINK.replace(STATIC_NEWS_ID_LINK_PATTERN, url));
  }

  function onLinkClick(link: string) {
    router.push(link);
  }

  return (
    <WhatNewStyle>
      <Container>
        <PortletTitle>
          <PortletTextWrapper>
            <PortletTitleHeader>มีอะไรใหม่</PortletTitleHeader>
            <PortletDiscription>
              สำรวจประกาศเกี่ยวกับการรับเข้าศึกษา กิจกรรม และข่าวสารล่าสุด
            </PortletDiscription>
          </PortletTextWrapper>

          {showForDesktop && (
            <ShowAllButton>
              <Button
                $color="borderless"
                onClick={() => onLinkClick(STATIC_NEWS_CATEGORY_LINK)}>
                แสดงทั้งหมด
                <HiOutlineArrowRight
                  className="Icon"
                  style={{ marginLeft: '15px' }}
                  size="20px"
                />
              </Button>
            </ShowAllButton>
          )}
        </PortletTitle>

        {data && (
          <CardsLayout>
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
          </CardsLayout>
        )}

        {showForMobile && (
          <ShowAllButton style={{ marginBottom: '20px' }}>
            <Button
              $color="borderless"
              onClick={() => onLinkClick(STATIC_NEWS_CATEGORY_LINK)}>
              แสดงทั้งหมด
              <HiOutlineArrowRight
                className="Icon"
                style={{ marginLeft: '15px' }}
                size="20px"
              />
            </Button>
          </ShowAllButton>
        )}
      </Container>
    </WhatNewStyle>
  );
};

export default WhatNewSection;
