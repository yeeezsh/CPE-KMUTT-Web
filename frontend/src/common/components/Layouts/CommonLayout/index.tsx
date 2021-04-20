import { Breadcrumb } from 'antd';
import Container from 'common/components/Container';
import Footer from 'modules/root/components/Footer';
import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri';
import {
  CommonLayoutStyle,
  CommonWrapperCanvas,
  CommonWrapperHeader,
  CommonWrapperHeaderContent,
  CommonWrapperRow,
  CommonWrapperSocial,
} from './styled';
import { CommonLayoutProps } from './types';

const CommonLayout: React.FC<CommonLayoutProps> = ({ children, ...props }) => {
  return (
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
            {props.navigate?.map((items, index) => {
              return (
                <Breadcrumb.Item href={items.link} key={index}>
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
      <Footer />
    </CommonLayoutStyle>
  );
};

export default CommonLayout;
