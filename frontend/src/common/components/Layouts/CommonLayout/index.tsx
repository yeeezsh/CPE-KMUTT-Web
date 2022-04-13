import React from 'react';

import { Breadcrumb } from 'antd';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { RiFacebookCircleFill } from 'react-icons/ri';

import Btn from 'common/components/Button';
import Container from 'common/components/Container';

import Footer from 'modules/home/components/Footer';
import Navbar from 'modules/root/components/Navbar';

import {
  AnnouceFAQ,
  CommonLayoutStyle,
  CommonWrapperCanvas,
  CommonWrapperHeader,
  CommonWrapperHeaderContent,
  CommonWrapperRow,
  CommonWrapperSocial,
  FAQButton,
  FAQColumn,
  FAQContent,
  FAQHeader,
  FAQRow,
} from './styled';
import { CommonLayoutProps } from './types';

export const FaqWithBanner: React.FC = () => (
  <AnnouceFAQ>
    <FAQRow className="align-center">
      <FAQColumn>
        <FAQHeader>มีคำถามหรือข้อสงสัย</FAQHeader>
        <FAQContent>เซ็นเตอร์เวิร์คฟลุทแอดมิสชันออร์แกน</FAQContent>
        <FAQButton>
          <Btn $color={'transparent'}>
            ติดต่อเรา
            <HiOutlineArrowRight
              className="Icon"
              style={{ marginLeft: '16px' }}
              size="16px"
            />
          </Btn>
        </FAQButton>
      </FAQColumn>
      <FAQColumn>
        <img src="/images/annouce_faq.png" alt="" />
      </FAQColumn>
    </FAQRow>
  </AnnouceFAQ>
);

const CommonLayout: React.FC<CommonLayoutProps> = ({ children, ...props }) => {
  return (
    <>
      <Navbar />
      <CommonLayoutStyle>
        <CommonWrapperHeader>
          <CommonWrapperCanvas>
            <CommonWrapperRow className="center">
              <CommonWrapperHeaderContent>{props.header}</CommonWrapperHeaderContent>
            </CommonWrapperRow>
          </CommonWrapperCanvas>
        </CommonWrapperHeader>
        <Container>
          <CommonWrapperRow className="space-between">
            <Breadcrumb separator="/">
              {props.navigate?.map((items) => {
                return (
                  <Breadcrumb.Item
                    href={items.link}
                    key={items.link + items.title + '-breadcrumb'}>
                    {items.title}
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>

            <CommonWrapperSocial>
              <CommonWrapperRow>
                Share this page to:
                <a href="/">
                  <RiFacebookCircleFill
                    size="19px"
                    color="#3B5998"
                    style={{ marginLeft: '8px' }}
                  />
                </a>
                <a href="/">
                  <AiFillTwitterCircle
                    size="19px"
                    color="#00ACEE"
                    style={{ marginLeft: '8px' }}
                  />
                </a>
              </CommonWrapperRow>
            </CommonWrapperSocial>
          </CommonWrapperRow>
        </Container>
        {children}

        {props.withFaqBanner && <FaqWithBanner />}
        <Footer />
      </CommonLayoutStyle>
    </>
  );
};

export default CommonLayout;
