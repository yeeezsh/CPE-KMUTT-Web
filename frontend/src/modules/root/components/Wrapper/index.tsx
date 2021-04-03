import { Breadcrumb } from 'antd';
import Container from 'common/components/Container';
import Footer from 'modules/root/components/Footer';
import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri';
import {
  WrapperHeader,
  WrapperHeaderContent,
  WrapperRow,
  WrapperSocial,
  WrapperStyle,
  WrpperCanvas,
} from './styled';
import { WrapperProps } from './types';

const WrapperSection: React.FC<WrapperProps> = ({ children, ...props }) => {
  return (
    <WrapperStyle>
      <WrapperHeader>
        <WrpperCanvas>
          <WrapperRow className="center">
            <WrapperHeaderContent>{props.header}</WrapperHeaderContent>
          </WrapperRow>
        </WrpperCanvas>
      </WrapperHeader>
      <Container>
        <WrapperRow className="space-between">
          <Breadcrumb separator="/">
            {props.navigate?.map((items, index) => {
              return (
                <Breadcrumb.Item href={items.link} key={index}>
                  {items.title}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
          <WrapperSocial>
            <WrapperRow>
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
            </WrapperRow>
          </WrapperSocial>
        </WrapperRow>
      </Container>
      {children}
      <Footer />
    </WrapperStyle>
  );
};

export default WrapperSection;
