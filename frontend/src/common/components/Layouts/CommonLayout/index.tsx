import { FC } from 'react';

import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri';

import Container from 'common/components/Container';
import FaqBanner from 'common/components/FaqBanner';

import Footer from 'modules/home/components/Footer';
import Navbar from 'modules/root/components/Navbar';

import { DEFAULT_HEADER_BACKGROUND_IMAGE_URL } from './constants';
import {
  CommonLayoutStyle,
  CommonWrapperCanvas,
  CommonWrapperHeader,
  CommonWrapperHeaderContent,
  CommonWrapperRow,
  CommonWrapperSocial,
} from './styled';
import { CommonLayoutProps } from './types';

export const CommonLayout: FC<CommonLayoutProps> = ({
  headerBackgroundImage,
  children,
  Header,
  withFaqBanner,
  ...props
}) => {
  return (
    <>
      <Navbar />
      <CommonLayoutStyle>
        <Container>
          <CommonWrapperRow className="space-between">
            <Breadcrumb separator="/">
              {props.navigate?.map((items) => {
                return (
                  <Breadcrumb.Item key={items.link + items.title}>
                    <Link href={items.link}>{items.title}</Link>
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
        {Header}
        {!Header && (
          <CommonWrapperHeader
            $backgroundImage={
              headerBackgroundImage ?? DEFAULT_HEADER_BACKGROUND_IMAGE_URL
            }>
            <CommonWrapperCanvas>
              <CommonWrapperRow className="center">
                <CommonWrapperHeaderContent>{props.header}</CommonWrapperHeaderContent>
              </CommonWrapperRow>
            </CommonWrapperCanvas>
          </CommonWrapperHeader>
        )}

        {children}

        {withFaqBanner && <FaqBanner />}
        <Footer />
      </CommonLayoutStyle>
    </>
  );
};

export default CommonLayout;
