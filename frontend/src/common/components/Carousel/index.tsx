import { ArrowRightOutlined } from '@ant-design/icons';
import Container from 'common/components/Container';
import COLORS from 'common/constants/colors';
import React, { useState } from 'react';
import useProgressbar from './hooks/useProgressbar';
import useSlider from './hooks/useSlider';
import {
  AnimatedProgress,
  Caption,
  Fader,
  FaderSlide,
  Heading,
  Image,
  LeftButton,
  NavigationWrapper,
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
    <NavigationWrapper>
      <Container>
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
                            <StyledButton as="a" href={link}>
                              อ่านต่อเพิ่มเติม
                              <ArrowRightOutlined style={{ marginLeft: '15px' }} />
                            </StyledButton>
                          ) : (
                            <StyledButton onClick={showModal}>
                              อ่านต่อเพิ่มเติม
                              <ArrowRightOutlined style={{ marginLeft: '15px' }} />
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
                    <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.48521 2.51472L9.54587 3.57538L2.86902 10.2522L20.4654 10.2522L20.4654 11.7478L2.86902 11.7478L9.54587 18.4246L8.48521 19.4853L-6.83069e-05 11L8.48521 2.51472Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                  </LeftButton>
                  <RightButton onClick={() => slider.next()}>
                    <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.5148 19.4853L12.4541 18.4246L19.131 11.7478L1.53463 11.7478L1.53463 10.2522L19.131 10.2522L12.4541 3.57538L13.5148 2.51472L22.0001 11L13.5148 19.4853Z"
                        fill="#FAFAFA"
                      />
                    </svg>
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
    </NavigationWrapper>
  );
};

export default Carousel;
