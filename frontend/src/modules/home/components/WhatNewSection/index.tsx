import React from 'react';

import { HiOutlineArrowRight } from 'react-icons/hi';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import { CardVariant } from 'common/components/Card/types';
import Container from 'common/components/Container';

import {
  CardContainer,
  PortletDiscription,
  PortletTitle,
  PortletTitleHeader,
  ShowAllButton,
  WhatNewStyle,
} from './styled';

const WhatNewSection: React.FC = () => {
  const constants = [
    {
      id: '1',
      title: 'การรับเข้าศึกษา',
      description:
        'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
      date: '28 ตุลาคม 2563',
      links: '/images/thumbnail.png',
      variant: CardVariant.primary,
    },
    {
      id: '2',
      title: 'การรับเข้าศึกษา',
      description:
        'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
      date: '28 ตุลาคม 2563',
      variant: CardVariant.normal,
    },
    {
      id: '3',
      title: 'การรับเข้าศึกษา',
      description:
        'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
      date: '28 ตุลาคม 2563',
      variant: CardVariant.normal,
    },
  ];

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

        <CardContainer>
          {constants.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              date={data.date}
              thumbnail={data.links}
              id={data.id}
              variant={data.variant}
            />
          ))}
        </CardContainer>
      </Container>
    </WhatNewStyle>
  );
};

export default WhatNewSection;
