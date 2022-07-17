import React from 'react';

import { useRouter } from 'next/router';

import Container from 'common/components/Container';

import FooterConstant from './constants';
import {
  ContactContainer,
  ContactContent,
  ContactHeader,
  CopyRight,
  CopyRightContainer,
  FooterStyled,
  HrLine,
  InfoContainer,
  InfoLink,
  SiteMapContainer,
  SiteMapHeader,
  SiteMapLink,
  SiteMapSupContainer,
} from './styled';

const StaticSection: React.FC = () => {
  const router = useRouter();

  function onClickLink(link?: string) {
    link && router.push(link);
  }

  return (
    <FooterStyled>
      <Container>
        <ContactContainer>
          <ContactHeader>ภาควิชาวิศวกรรมคอมพิวเตอร์</ContactHeader>
          <ContactContent>
            ชั้น 10-11, อาคารวิศววัฒนะ, มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี <br />
            126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
          </ContactContent>
          <ContactContent>
            (+66) 0 2470 9388 <br />
            nongyao.jam@mail.kmutt.ac.th
          </ContactContent>
        </ContactContainer>
        <HrLine />
        <SiteMapContainer>
          {FooterConstant.map(({ key, label, subMenu }) => (
            <SiteMapSupContainer key={key}>
              <SiteMapHeader>{label}</SiteMapHeader>
              {subMenu?.map(({ key, label, link }) => (
                <SiteMapLink key={key} href="#" onClick={() => onClickLink(link)}>
                  {label}
                </SiteMapLink>
              ))}
            </SiteMapSupContainer>
          ))}
        </SiteMapContainer>
        <HrLine />
        <CopyRightContainer>
          <CopyRight>
            Copyright © 2022 ภาควิชาวิศวกรรมคอมพิวเตอร์
            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี · สงวนสิทธิ์ทุกประการ
          </CopyRight>
          <InfoContainer>
            <InfoLink href="/"> ข้อกำหนดการใช้งาน </InfoLink>
            <HrLine style={{ transform: 'rotate(-90deg)', width: '20px' }} />
            <InfoLink href="/"> แผนผังเว็บไซต์</InfoLink>
            <HrLine style={{ transform: 'rotate(-90deg)', width: '20px' }} />
            <InfoLink href="/"> English</InfoLink>
          </InfoContainer>
        </CopyRightContainer>
      </Container>
    </FooterStyled>
  );
};

export default StaticSection;
