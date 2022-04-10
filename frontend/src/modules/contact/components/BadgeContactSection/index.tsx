import React from 'react';

import { HiOutlineArrowRight } from 'react-icons/hi';

import Button from 'common/components/Button';
import Container from 'common/components/Container';

import {
  BadgeListContainer,
  BadgeList,
  Badge,
  BadgeIcon,
  BadgeName,
  Description,
} from './styled';

const BadgeContactSection: React.FC = () => {
  return (
    <BadgeListContainer>
      <Container>
        <BadgeList>
          <Badge>
            <BadgeIcon src="assets/LOGO-KMUTT.svg" />
            <BadgeName>เว็บไซต์มหาวิทยาลัย</BadgeName>
            <Description>สำรวจชมรมนักศึกษาที่หลากหลาย</Description>
            <Button $color="transparent">
              ไปที่เว็บไซต์มหาวิทยาลัย&nbsp;
              <HiOutlineArrowRight />
            </Button>
          </Badge>

          <Badge>
            <BadgeIcon src="assets/MESSENGER-ICON.svg" />
            <BadgeName>แชทกับเราเดี๋ยวนี้</BadgeName>
            <Description>สำรวจเพื่อนร่วมงาน และแลปวิจัยของเรา</Description>
            <Button $color="transparent">
              เริ่มแชท&nbsp;
              <HiOutlineArrowRight />
            </Button>
          </Badge>

          <Badge>
            <BadgeIcon src="assets/FACEBOOK-ICON.svg" />
            <BadgeName>ติดตามเราบน Facebook</BadgeName>
            <Description>เซ็นเตอร์เวิร์คฟลุทแอดมิสชันออร์แกน</Description>
            <Button $color="transparent">
              ไปที่ Facebook&nbsp;
              <HiOutlineArrowRight />
            </Button>
          </Badge>
        </BadgeList>
      </Container>
    </BadgeListContainer>
  );
};

export default BadgeContactSection;
