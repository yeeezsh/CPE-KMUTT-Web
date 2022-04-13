import React from 'react';

import { HiOutlineArrowRight } from 'react-icons/hi';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import { CardProps } from 'common/components/Card/types';
import Container from 'common/components/Container';

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
            {data.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                description={data.description}
                date={data.date}
                thumbnail={data.thumbnail}
                id={data.id}
                variant={data.variant}
              />
            ))}
          </CardContainer>
        )}
      </Container>
    </WhatNewStyle>
  );
};

export default WhatNewSection;
