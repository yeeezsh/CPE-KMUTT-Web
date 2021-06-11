import React, { useState } from 'react';

import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

import Button from 'common/components/Button';
import Container from 'common/components/Container';
import COLORS from 'common/constants/colors';
import 'keen-slider/keen-slider.min.css';

import {
  PortletDiscription,
  PortletTitle,
  PortletTitleHeader,
  ShowAllButton,
} from 'modules/home/components/WhatNewSection/styled';

import useProgressbar from './hooks/useProgressbar';
import useSlider from './hooks/useSlider';
import {
  AnimatedProgress,
  Caption,
  CarouselWrapper,
  Fader,
  FaderSlide,
  Heading,
  Image,
  LeftButton,
  ProgressBar,
  ProgressContainer,
  RightButton,
  Shadow,
  SlideContent,
  Slides,
  StyledButton,
  StyledModal,
  StyledSlider,
  StyledSliderSlide,
  Tag,
} from './styled';
import { CarouselProps, ChildrenProps } from './types';

const Carousel: React.FC<CarouselProps> = (props) => {
  const SLIDE_COUNT = props.item.length;
  const isDefault = props.variant === 'Default' ? true : false;
  const firstSlide = props.initialSlide ? props.initialSlide : 0;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const {
    pause,
    currentSlide,
    opacities,
    sliderRef,
    slider,
    faderRef,
    fader,
  } = useSlider(firstSlide, SLIDE_COUNT, isModalVisible);

  const { progress } = useProgressbar(
    SLIDE_COUNT,
    pause || isModalVisible,
    currentSlide,
    firstSlide,
  );

  return (
    <CarouselWrapper customStyle={props.variant}>
      <Container>
        {props.variant === 'Slider' ? (
          <PortletTitle>
            <PortletTitleHeader>กิจกรรมและความสำเร็จ</PortletTitleHeader>
            <PortletDiscription>
              สำรวจประกาศเกี่ยวกับการรับเข้าศึกษา กิจกรรม และข่าวสารล่าสุด
            </PortletDiscription>
            <ShowAllButton>
              <Button $color="borderless">
                สำรวจทั้งหมด
                <HiOutlineArrowRight
                  className="Icon"
                  style={{ marginLeft: '15px' }}
                  size="20px"
                />
              </Button>
            </ShowAllButton>
          </PortletTitle>
        ) : null}
        <Slides defaultStyle={isDefault} customStyle={props.variant}>
          <Fader defaultStyle={isDefault} ref={faderRef}>
            {fader && (
              <ProgressContainer defaultStyle={isDefault} customStyle={props.variant}>
                {[...Array(fader.details().size).keys()].map((i) => {
                  return (
                    <>
                      {isDefault ? (
                        <ProgressBar
                          className={currentSlide === i ? 'active' : ''}
                          key={i}
                          onClick={() => {
                            slider.moveToSlideRelative(i);
                            fader.moveToSlideRelative(i);
                          }}
                        />
                      ) : (
                        <AnimatedProgress
                          key={i}
                          percent={i <= currentSlide ? progress[i] : 0}
                          showInfo={false}
                          strokeColor={COLORS.PRIMARY_COLOR}
                          strokeWidth={2}
                          strokeLinecap={'square'}
                          className={currentSlide >= i ? 'active' : ''}
                        />
                      )}
                    </>
                  );
                })}
              </ProgressContainer>
            )}
            {props.item
              ? props.item.map(({ id, heading, caption, tag, link }: ChildrenProps) => {
                  return (
                    <FaderSlide
                      key={id}
                      style={{
                        opacity: opacities[id],
                        display: id === currentSlide ? 'block' : 'none',
                      }}>
                      <SlideContent defaultStyle={isDefault}>
                        {tag ? <Tag>#{tag}</Tag> : null}
                        {heading ? (
                          <Heading defaultStyle={isDefault}>{heading}</Heading>
                        ) : null}
                        {caption ? (
                          props.variant === 'PopUp' ? (
                            <Caption defaultStyle={isDefault}>{caption}</Caption>
                          ) : caption.length > 100 ? (
                            <Caption defaultStyle={isDefault}>
                              {caption.slice(0, 100)}...
                            </Caption>
                          ) : (
                            <Caption defaultStyle={isDefault}>
                              {caption.slice(0, 100)}
                            </Caption>
                          )
                        ) : null}
                        {link && props.variant != 'PopUp' ? (
                          isDefault ? (
                            <StyledButton>
                              อ่านต่อเพิ่มเติม
                              <HiOutlineArrowRight
                                style={{ marginLeft: '15px' }}
                                size="15px"
                              />
                            </StyledButton>
                          ) : (
                            <StyledButton onClick={showModal}>
                              อ่านต่อเพิ่มเติม
                              <HiOutlineArrowRight
                                style={{ marginLeft: '15px' }}
                                size="15px"
                              />
                            </StyledButton>
                          )
                        ) : null}
                        <Shadow customStyle={props.variant} />
                      </SlideContent>
                    </FaderSlide>
                  );
                })
              : null}
          </Fader>
          <StyledSlider ref={sliderRef}>
            {props.item
              ? props.item.map(({ id, picture }: ChildrenProps) => {
                  return (
                    <StyledSliderSlide key={id}>
                      <Image src={picture} alt="" />
                    </StyledSliderSlide>
                  );
                })
              : null}
          </StyledSlider>
          {props.variant != 'Slider'
            ? slider && (
                <>
                  <LeftButton onClick={() => slider.prev()}>
                    <HiOutlineArrowLeft className="Icon" size="20px" />
                  </LeftButton>
                  <RightButton onClick={() => slider.next()}>
                    <HiOutlineArrowRight className="Icon" size="20px" />
                  </RightButton>
                </>
              )
            : null}
        </Slides>
      </Container>
      <StyledModal
        centered
        keyboard
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={'auto'}
        bodyStyle={{ padding: '0', height: '646px' }}
        destroyOnClose={true}>
        <Carousel item={props.item} variant="PopUp" initialSlide={currentSlide} />
      </StyledModal>
    </CarouselWrapper>
  );
};

export default Carousel;
