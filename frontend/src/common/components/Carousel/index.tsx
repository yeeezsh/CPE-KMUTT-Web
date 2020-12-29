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
import { CarouselProps } from './types';

const Carousel: React.FC<CarouselProps> = (props) => {
  return (
    <NavigationWrapper defaultMargin={props.variant === 'Default' ? true : false}>
      {props.title ? (
        <>
          <Title>
            <Section>
              <Heading>{props.title.heading}</Heading>
              <Description>{props.title.description}</Description>
            </Section>
            <StyledButton as="a" href={props.title.link}>
              สำรวจทั้งหมด
              <ArrowRightOutlined style={{ marginLeft: '15px' }} />
            </StyledButton>
          </Title>
          <CarouselSlide
            item={props.item}
            variant={props.variant}
            fullText={props.fullText}
            arrows={props.arrows}
          />
        </>
      ) : (
        <CarouselSlide
          item={props.item}
          variant={props.variant}
          fullText={props.fullText}
          arrows={props.arrows}
        />
      )}
    </NavigationWrapper>
  );
};

export default Carousel;
