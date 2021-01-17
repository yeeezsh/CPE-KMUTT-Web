import Container from 'common/components/Container';
import React from 'react';
import { WhatNewStyle } from './styled';
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
      primary: true,
    },
    {
      id: '2',
      title: 'การรับเข้าศึกษา',
      description:
        'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
      date: '28 ตุลาคม 2563',
      primary: false,
    },
    {
      id: '3',
      title: 'การรับเข้าศึกษา',
      description:
        'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
      date: '28 ตุลาคม 2563',
      primary: false,
    },
  ];

  return (
    <WhatNewStyle>
      <div className="background-bracket"></div>
      <Container>
        <div className="portlet-title">
          <div className="portlet-title__header">มีอะไรใหม่</div>
          <div className="portlet-discription">
            สำรวจประกาศเกี่ยวกับการรับเข้าศึกษา กิจกรรม และข่าวสารล่าสุด
          </div>
          <div className="show-all">
            แสดงทั้งหมด
            <div className="arrow-icon" />
          </div>
        </div>

        <div className="card-container">
          {constants.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              date={data.date}
              links={data.links}
              id={data.id}
              primary={data.primary}
            />
          ))}
        </div>
      </Container>
    </WhatNewStyle>
  );
};

export default WhatNewSection;
