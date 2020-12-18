import { ArrowRightOutlined } from '@ant-design/icons';
import Container from 'common/components/Container';
import { useKeenSlider } from 'keen-slider/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  Caption,
  CarouselStyle,
  Heading,
  Image,
  LeftButton,
  NavigationWrapper,
  RightButton,
  SlideContent,
  StyledButton,
  Tag,
} from './styled';
import { CarouselProps, ChildProps } from './types';

const Carousel: React.FC<ChildProps> = (props) => {
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

  return (
    <>
      <CarouselStyle />
      <NavigationWrapper>
        <Container>
          <div className="keen-slider" ref={slideRef}>
            {props.item
              ? props.item.map(
                  ({ id, picture, heading, caption, tag, links }: CarouselProps) => {
                    return (
                      <>
                        <div className="keen-slider__slide number-slide" key={id}>
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
                                    />
                                  );
                                })}
                              </div>
                            )}
                            {tag ? <Tag>#{tag}</Tag> : null}
                            {heading ? <Heading>{heading}</Heading> : null}
                            {caption ? (
                              caption.length > 100 ? (
                                <Caption>{caption.slice(0, 100)}...</Caption>
                              ) : (
                                <Caption>{caption.slice(0, 100)}</Caption>
                              )
                            ) : null}
                            {links ? (
                              <StyledButton>
                                อ่านต่อเพิ่มเติม
                                <ArrowRightOutlined style={{ marginLeft: '15px' }} />
                              </StyledButton>
                            ) : null}
                          </SlideContent>
                          {picture ? <Image src={picture} alt="" /> : null}
                        </div>
                      </>
                    );
                  },
                )
              : null}
          </div>
          {slider && (
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
          )}
        </Container>
      </NavigationWrapper>
    </>
  );
};

export default Carousel;
