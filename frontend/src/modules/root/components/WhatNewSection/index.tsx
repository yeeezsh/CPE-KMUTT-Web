import Container from 'common/components/Container';
import React from 'react';
import {
  WhatNewStyle,
  PortletTitle,
  PortletTitleHeader,
  PortletDiscription,
  CardContainer,
} from './styled';
import Card from 'common/components/Card';

const WhatNewSection: React.FC = () => {
  const constants = [
    {
      id: '1',
      title: 'การรับเข้าศึกษา',
      description:
        'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
      date: '28 ตุลาคม 2563',
      links: '/images/thumbnail.png',
      variant: 'primary',
    },
    {
      id: '2',
      title: 'การรับเข้าศึกษา',
      description:
        'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
      date: '28 ตุลาคม 2563',
      variant: 'normal',
    },
    {
      id: '3',
      title: 'การรับเข้าศึกษา',
      description:
        'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
      date: '28 ตุลาคม 2563',
      variant: 'normal',
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
          {/* <div className="show-all">
            แสดงทั้งหมด
            <div className="arrow-icon" />
          </div> */}
        </PortletTitle>

        <CardContainer>
          {constants.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              date={data.date}
              links={data.links}
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
