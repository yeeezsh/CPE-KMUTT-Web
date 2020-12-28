import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import CarouselSlide from '../Carousel/components/CarouselSlide';
import {
  Description,
  Heading,
  NavigationWrapper,
  Section,
  StyledButton,
  Title,
} from './styled';
import { SlideProps } from './types';

const Carousel: React.FC<SlideProps> = (props) => {
  const isDefault = props.variant === 'Default' ? true : false;
  return (
    <NavigationWrapper defaultMargin={isDefault}>
      {isDefault ? (
        <CarouselSlide item={props.item} variant={props.variant} />
      ) : (
        <>
          <Title>
            <Section>
              <Heading>กิจกรรมและความสำเร็จ</Heading>
              <Description>
                สำรวจประกาศเกี่ยวกับการรับเข้าศึกษา กิจกรรม และข่าวสารล่าสุด
              </Description>
            </Section>
            <StyledButton>
              สำรวจทั้งหมด
              <ArrowRightOutlined style={{ marginLeft: '15px' }} />
            </StyledButton>
          </Title>

          <CarouselSlide item={props.item} variant={props.variant} />
        </>
      )}
    </NavigationWrapper>
  );
};

export default Carousel;
