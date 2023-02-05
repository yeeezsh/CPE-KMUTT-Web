import React from 'react';

import { useRouter } from 'next/router';
import { HiOutlineArrowRight } from 'react-icons/hi';

import Button from 'common/components/Button';
import Container from 'common/components/Container';

import { HOME_CONTENTS } from 'modules/home/constants';

import {
  BadgeListContainer,
  BadgeList,
  Badge,
  BadgeIcon,
  BadgeName,
  Description,
} from './styled';

const BadgeContactSection: React.FC = () => {
  function onClick(href: string) {
    router.push(href);
  }

  const router = useRouter();
  return (
    <BadgeListContainer>
      <Container>
        <BadgeList>
          <Badge>
            <BadgeIcon src="assets/LOGO-KMUTT.svg" />
            <BadgeName>เว็บไซต์มหาวิทยาลัย</BadgeName>
            <Description>สำรวจชมรมนักศึกษาที่หลากหลาย</Description>
            <Button
              $color="transparent"
              onClick={() => onClick(HOME_CONTENTS.badgeContactSection.kmutt)}>
              ไปที่เว็บไซต์มหาวิทยาลัย&nbsp;
              <HiOutlineArrowRight />
            </Button>
          </Badge>

          <Badge>
            <BadgeIcon src="assets/MESSENGER-ICON.svg" />
            <BadgeName>แชทกับเรา</BadgeName>
            <Description>สำรวจเพื่อนร่วมงาน และแลปวิจัยของเรา</Description>
            <Button
              $color="transparent"
              onClick={() => onClick(HOME_CONTENTS.badgeContactSection.messenger)}>
              เริ่มแชท&nbsp;
              <HiOutlineArrowRight />
            </Button>
          </Badge>

          <Badge>
            <BadgeIcon src="assets/FACEBOOK-ICON.svg" />
            <BadgeName>ติดตามเราบน Facebook</BadgeName>
            <Description>เพื่อรับข่าวสาร</Description>
            <Button
              $color="transparent"
              onClick={() => onClick(HOME_CONTENTS.badgeContactSection.facebook)}>
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
