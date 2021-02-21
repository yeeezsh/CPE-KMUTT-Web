import BREAKPOINTS from 'common/constants/breakpoints';
import COLORS from 'common/constants/colors';
import styled, { createGlobalStyle } from 'styled-components';
import { Progress } from 'antd';

interface DesignProps {
  defaultStyle?: boolean;
  customStyle?: string;
}

export const CarouselStyle = createGlobalStyle`
  .keen-slider {
    height: 100%;
    width: 50%;
    background: #f4f5f6;
    @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
      height: 45%;
      width: 100%;
    }
  }

  .keen-slider__slide {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
`;

export const Fader = styled.div`
  height: 100%;
  width: 50%;
  position: relative;
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    height: 55%;
    width: 100%;
  }
`;

export const FaderSlide = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  margin-top: 0;
`;

export const NavigationWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  background: #f4f5f6;
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
    props.customStyle === 'Default'
      ? '550px'
      : props.customStyle === 'Slider'
      ? '400px'
      : '646px'};
  width: 100%;
  display: flex;
  flex-direction: ${(props: DesignProps) => (props.defaultStyle ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: center;
  overflow: ${(props: DesignProps) =>
    props.customStyle === 'PopUp' ? 'auto' : 'hidden'};
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    height: ${(props: DesignProps) => (props.defaultStyle ? '655px' : '435px')};
    overflow: hidden;
    flex-direction: ${(props: DesignProps) =>
      props.defaultStyle ? 'column' : 'column-reverse'};
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  padding: ${(props: DesignProps) => (props.defaultStyle ? '100px 0 40px 0' : '40px')};
  @media (max-width: ${BREAKPOINTS.IPAD_LANDSCAPE}) {
    margin-left: ${(props: DesignProps) => (props.defaultStyle ? '20px' : 'none')};
  }
  @media (max-width: ${BREAKPOINTS.IPAD_PORTRAIT}) {
    justify-content: center;
    padding: ${(props: DesignProps) =>
      props.defaultStyle ? '20px 0 80px 0' : '20px 35px'};
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

export const StyledProgress = styled(Progress)`
  width: 100%;
  height: 2px;
  opacity: 0.2;
  cursor: pointer;
  margin: 0 2px;
  top: -11px;
  &.active {
    opacity: 1;
  }
`;

export const SlideContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: 'Prompt';
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
  margin-bottom: 40px;
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
  height: 100%;
  overflow-y: auto;
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
  padding: 7px 20px;
  background: none;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  z-index: 1;
  & :hover {
    background: ${COLORS.PRIMARY_COLOR};
    color: white;
  }
  &: focus {
    outline: none;
  }
`;
