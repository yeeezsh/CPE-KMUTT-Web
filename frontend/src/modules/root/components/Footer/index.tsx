import React from 'react';
import {
  FooterStyled,
  HrLine,
  ContactContainer,
  ContactHeader,
  ContactContent,
  SiteMapContainer,
  SiteMapSupContainer,
  SiteMapHeader,
  SiteMapLink,
  CopyRight,
  CopyRightContainer,
  InfoContainer,
  InfoLink,
} from './styled';
import { FooterProps } from './types';
import Container from 'common/components/Container';
import FooterConstant from './constants';

const StaticSection: React.FC<FooterProps> = () => {
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
                <SiteMapLink key={key} href={link}>
                  {label}
                </SiteMapLink>
              ))}
            </SiteMapSupContainer>
          ))}
        </SiteMapContainer>
        <HrLine />
        <CopyRightContainer>
          <CopyRight>
            Copyright © 2020 ภาควิชาวิศวกรรมคอมพิวเตอร์
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
