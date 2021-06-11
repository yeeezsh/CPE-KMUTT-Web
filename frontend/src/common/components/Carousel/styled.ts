import { Modal, Progress } from 'antd';
import styled from 'styled-components';

import BREAKPOINTS from 'common/constants/breakpoints';
import COLORS from 'common/constants/colors';

interface DesignProps {
  defaultStyle?: boolean;
  customStyle?: string;
}

export const CarouselWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  background: #f4f5f6;
  font-family: 'Kanit';
  padding-bottom: ${(props: DesignProps) =>
    props.customStyle === 'Slider' ? '100px' : '0'};
`;

export const LeftButton = styled.button`
  background: ${COLORS.PRIMARY_COLOR};
  color: #fafafa;
  width: 50px;
  height: 50px;
  padding: 15px;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  cursor: pointer;
  left: 0;
  border: none;
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    display: none;
  }
`;

export const RightButton = styled.button`
  background: ${COLORS.PRIMARY_COLOR};
  color: #fafafa;
  width: 50px;
  height: 50px;
  padding: 15px;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  cursor: pointer;
  left: auto;
  right: 0;
  border: none;
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    display: none;
  }
`;

export const Slides = styled.div`
  height: ${(props: DesignProps) =>
    props.defaultStyle ? '550px' : props.customStyle === 'Slider' ? '400px' : '646px'};
  width: 100%;
  display: flex;
  flex-direction: ${(props: DesignProps) => (props.defaultStyle ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: center;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    height: ${(props: DesignProps) =>
      props.defaultStyle ? '655px' : props.customStyle === 'Slider' ? '435px' : '646px'};
    overflow: hidden;
    flex-direction: ${(props: DesignProps) =>
      props.defaultStyle ? 'column' : 'column-reverse'};
  }
`;

export const StyledSlider = styled.div.attrs({
  className: 'keen-slider',
})`
  height: 100%;
  width: 50%;
  background: #f4f5f6;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    height: 45%;
    width: 100%;
  }
`;

export const StyledSliderSlide = styled.div.attrs({
  className: 'keen-slider__slide',
})`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Fader = styled.div`
  height: 100%;
  width: 50%;
  position: relative;
  background: ${(props: DesignProps) => (props.defaultStyle ? '#f4f5f6' : 'white')};
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    height: 55%;
    width: 100%;
  }
`;

export const FaderSlide = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  margin-top: 0;
`;

export const ProgressContainer = styled.div`
  display: flex;
  width: ${(props: DesignProps) => (props.customStyle === 'PopUp' ? '95%' : '100%')};
  padding: ${(props: DesignProps) => (props.defaultStyle ? '100px 0 40px 0' : '40px')};
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    margin-left: ${(props: DesignProps) => (props.defaultStyle ? '20px' : '0')};
  }
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    width: 100%;
    justify-content: center;
    padding: ${(props: DesignProps) =>
      props.defaultStyle ? '20px 0 80px 0' : '20px 35px'};
    margin-left: 0;
  }
`;

export const ProgressBar = styled.div`
  border: none;
  height: 2px;
  width: 20px;
  background: ${COLORS.PRIMARY_COLOR};
  opacity: 0.2;
  margin: 0 2px;
  cursor: pointer;
  &.active {
    opacity: 1;
  }
`;

export const AnimatedProgress = styled(Progress)`
  width: 100%;
  height: 2px;
  margin: 0 2px;
  top: -11px;
  div {
    transition: none;
  }
  &.active {
    opacity: 1;
    div {
      transition: width 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0;
    }
  }
`;

export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: ${(props: DesignProps) => (props.defaultStyle ? '0 24px 0 0' : '0 40px')};
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    padding: ${(props: DesignProps) => (props.defaultStyle ? '0 24px 0 20px' : '0 40px')};
  }
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    align-items: ${(props: DesignProps) =>
      props.defaultStyle ? 'center' : 'flex-start'};
    padding: ${(props: DesignProps) => (props.defaultStyle ? '0 64px' : '0 40px')};
  }
`;

export const Tag = styled.p`
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: ${COLORS.PRIMARY_COLOR};
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const Heading = styled.p`
  font-size: ${(props: DesignProps) => (props.defaultStyle ? '48px' : '24px')};
  line-height: ${(props: DesignProps) => (props.defaultStyle ? '60px' : '31px')};
  font-weight: ${(props: DesignProps) => (props.defaultStyle ? '500' : '700')};
  margin-bottom: 10px;
  color: ${COLORS.GRAY_1};
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    text-align: center;
    font-size: ${(props: DesignProps) => (props.defaultStyle ? '32px' : '24px')};
    line-height: ${(props: DesignProps) => (props.defaultStyle ? '48px' : '31px')};
    font-weight: ${(props: DesignProps) => (props.defaultStyle ? '700' : '700')};
  }
`;

export const Caption = styled.p`
  text-align: justify;
  font-size: 14px;
  line-height: ${(props: DesignProps) => (props.defaultStyle ? '24px' : '22px')};
  font-weight: ${(props: DesignProps) => (props.defaultStyle ? '300' : '400')};
  padding-bottom: 30px;
  color: ${COLORS.GRAY_2};
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    font-size: ${(props: DesignProps) => (props.defaultStyle ? '14px' : '12px')};
    line-height: ${(props: DesignProps) => (props.defaultStyle ? '16px' : '20px')};
    padding-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const StyledButton = styled.button`
  color: ${COLORS.PRIMARY_COLOR};
  width: fit-content;
  height: 40px;
  border: 1px solid ${COLORS.PRIMARY_COLOR};
  padding: 0 20px;
  background: none;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 1;
  &:hover {
    background: ${COLORS.PRIMARY_COLOR};
    color: white;
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledModal = styled(Modal)`
  span {
    padding-top: 10px;
    color: ${COLORS.PRIMARY_COLOR};
  }
`;

export const Shadow = styled.div`
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.2s ease-out;
  box-shadow: 0 -3em 3em -1em white inset;
  display: ${(props: DesignProps) => (props.customStyle === 'PopUp' ? 'static' : 'none')};
`;
