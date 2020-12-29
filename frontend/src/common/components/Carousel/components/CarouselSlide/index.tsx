import { ArrowRightOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import Container from 'common/components/Container';
import Carousel from 'components/Carousel';
import { CarouselProps, ChildrenProps } from 'components/Carousel/types';
import { useKeenSlider } from 'keen-slider/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  Caption,
  CarouselStyle,
  Heading,
  Image,
  LeftButton,
  RightButton,
  SlideContent,
  Slides,
  Space,
  StyledButton,
  Tag,
} from './styled';

const CarouselSlide: React.FC<CarouselProps> = (props) => {
  const isDefault = props.variant === 'Default' ? true : false;
  const [pause, setPause] = useState(false);
  const timer = useRef<number>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
    duration: 2000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    if (slideRef.current != null) {
      slideRef.current.addEventListener('mouseover', () => {
        setPause(true);
      });
      slideRef.current.addEventListener('mouseout', () => {
        setPause(false);
      });
    }
  }, [slideRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <CarouselStyle />
      <div
        className="keen-slider"
        style={isDefault ? { background: '#f4f5f6' } : { background: 'white' }}
        ref={slideRef}>
        {props.item
          ? props.item.map(
              ({ id, picture, heading, caption, tag, link }: ChildrenProps) => {
                return (
                  <>
                    <div className="keen-slider__slide" key={id}>
                      <Container>
                        <Slides defaultStyle={isDefault} customStyle={props.variant}>
                          <SlideContent>
                            {slider && (
                              <div className="dashes">
                                {[...Array(slider.details().size).keys()].map((i) => {
                                  return (
                                    <button
                                      key={i}
                                      onClick={() => {
                                        slider.moveToSlideRelative(i);
                                      }}
                                      className={
                                        'dash' + (currentSlide === i ? ' active' : '')
                                      }
                                      style={
                                        isDefault ? { width: '20px' } : { width: '100%' }
                                      }
                                    />
                                  );
                                })}
                              </div>
                            )}
                            {tag ? <Tag>#{tag}</Tag> : null}
                            {heading ? <Heading>{heading}</Heading> : null}
                            {caption ? (
                              props.fullText ? (
                                <Caption>{caption}</Caption>
                              ) : caption.length > 100 ? (
                                <Caption>{caption.slice(0, 100)}...</Caption>
                              ) : (
                                <Caption>{caption.slice(0, 100)}</Caption>
                              )
                            ) : null}
                            {link && !props.fullText ? (
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
                          </SlideContent>
                          <Space />
                          {picture ? <Image src={picture} alt="" /> : null}
                        </Slides>
                        <Modal
                          centered
                          keyboard
                          visible={isModalVisible}
                          onCancel={handleCancel}
                          footer={null}
                          width={1250}
                          bodyStyle={{ padding: '0' }}>
                          <Carousel
                            item={props.item}
                            variant="PopUp"
                            fullText={true}
                            arrows={true}
                          />
                        </Modal>
                      </Container>
                    </div>
                  </>
                );
              },
            )
          : null}
      </div>
      {props.arrows
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
    </>
  );
};

export default CarouselSlide;
