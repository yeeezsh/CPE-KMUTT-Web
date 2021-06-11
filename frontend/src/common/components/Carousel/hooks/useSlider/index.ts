import { useEffect, useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';

const SLIDE_EFFECT_DURATION = 2000;
const SLIDE_CHANGE_PER_SEC = 5;

export default function useSlide(
  firstSlide: number,
  SLIDE_COUNT: number,
  isModalVisible: boolean,
) {
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPic, setCurrentPic] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: firstSlide,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
      setCurrentPic(s.details().relativeSlide);
    },
    loop: true,
    duration: SLIDE_EFFECT_DURATION,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  const [opacities, setOpacities] = useState<number[]>([]);
  const [currentContent, setCurrentContent] = useState(0);
  const [faderRef, fader] = useKeenSlider<HTMLDivElement>({
    slides: SLIDE_COUNT,
    initial: firstSlide,
    loop: true,
    duration: SLIDE_EFFECT_DURATION,
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
      setCurrentContent(s.details().relativeSlide);
    },
  });

  // Set slide to match
  useEffect(() => {
    const contentNotMatch =
      currentContent !== currentSlide && currentPic === currentSlide;
    const pictureNotMatch =
      currentContent === currentSlide && currentPic !== currentSlide;
    const lastSlideIndex = SLIDE_COUNT - 1;
    const currentIsLastSlide = currentSlide === lastSlideIndex;
    const currentIsFirstSlide = currentSlide === 0;

    if (contentNotMatch) {
      if (currentIsLastSlide && currentContent == 0) {
        fader.prev();
      } else if (currentIsFirstSlide && currentContent == lastSlideIndex) {
        fader.next();
      } else {
        fader.moveToSlideRelative(currentSlide);
      }
    }

    if (pictureNotMatch) {
      if (currentIsLastSlide && currentPic == 0) {
        slider.prev();
      } else if (currentIsFirstSlide && currentPic == lastSlideIndex) {
        slider.next();
      } else {
        slider.moveToSlideRelative(currentSlide);
      }
    }
  }, [currentPic, currentSlide, currentContent]);

  // Set pause on hover
  useEffect(() => {
    if (faderRef.current != null) {
      faderRef.current.addEventListener('mouseover', () => {
        setPause(true);
      });
      faderRef.current.addEventListener('mouseout', () => {
        setPause(false);
      });
    }
    if (sliderRef.current != null) {
      sliderRef.current.addEventListener('mouseover', () => {
        setPause(true);
      });
      sliderRef.current.addEventListener('mouseout', () => {
        setPause(false);
      });
    }
  }, [faderRef, sliderRef]);

  // Auto play slides
  const [timer, setTimer] = useState(SLIDE_CHANGE_PER_SEC);
  useEffect(() => {
    if (timer === 0) {
      setTimer(SLIDE_CHANGE_PER_SEC);
      slider.next();
    }
    if (!pause && !isModalVisible) {
      const slideInterval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(slideInterval);
    }
  }, [timer, pause, isModalVisible]);

  return {
    pause,
    currentSlide,
    opacities,
    sliderRef,
    slider,
    faderRef,
    fader,
  };
}
