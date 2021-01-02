import Container from 'common/components/Container';
import React from 'react';
import { WhatNewStyle } from './styled';
import Card from 'common/components/Card';

const WhatNewSection: React.FC = () => {
  return (
    <WhatNewStyle>
      <div className="bracket-top"></div>
      <div className="bracket-bottom"></div>
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
          <Card
            title="การรับเข้าศึกษา"
            description="ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563"
            date="28 ตุลาคม 2563"
            id="1"
            primary={true}
          />
          <Card
            title="การรับเข้าศึกษา"
            description="ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563"
            date="28 ตุลาคม 2563"
            id="2"
            primary={false}
          />
          <Card
            title="การรับเข้าศึกษา"
            description="ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563"
            date="28 ตุลาคม 2563"
            id="3"
            primary={false}
          />
        </div>
      </Container>
    </WhatNewStyle>
  );
};

export default WhatNewSection;
