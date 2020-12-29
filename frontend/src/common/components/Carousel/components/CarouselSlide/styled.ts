import COLORS from 'common/constants/colors';
import styled, { createGlobalStyle } from 'styled-components';

interface DesignProps {
  defaultStyle: boolean;
  customStyle: string;
}

export const CarouselStyle = createGlobalStyle`
  .keen-slider {
    height: auto;
    width: auto;
    background: #f4f5f6;
  }

  .dashes {
    display: flex;
    padding: 40px 0;
  }
  
  .dash {
    border: none;
    height: 2px;
    background: ${COLORS.PRIMARY_COLOR};
    opacity: 0.2;
    margin: 0 2px;
    cursor: pointer;
  }
  
  .dash:focus {
    outline: none;
  }
  
  .dash.active {
    opacity: 1;
  }
`;

export const Slides = styled.div`
  height: ${(props: DesignProps) =>
    props.customStyle === 'Default'
      ? '550px'
      : props.customStyle === 'Slider'
      ? '400px'
      : '646px'};
  display: flex;
  flex-direction: ${(props: DesignProps) => (props.defaultStyle ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: center;
  overflow: auto;
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
  &:focus {
    outline: none;
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
  &:focus {
    outline: none;
  }
`;

export const SlideContent = styled.div`
  display: flex;
  width: 49%;
  flex-direction: column;
  font-size: 14px;
  margin: auto 50px auto 0;
`;

export const Tag = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${COLORS.PRIMARY_COLOR};
`;

export const Heading = styled.p`
  font-size: 34px;
  font-weight: bold;
  color: ${COLORS.GRAY_1};
`;

export const Caption = styled.p`
  font-family: Kanit;
  font-size: 14px;
  color: ${COLORS.GRAY_2};
  height: 100%;
  overflow-y: auto;
`;

export const Space = styled.div`
  width: 2%;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 550px;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const StyledButton = styled.button`
  color: ${COLORS.PRIMARY_COLOR};
  width: fit-content;
  height: 40px;
  border: 1px solid ${COLORS.PRIMARY_COLOR};
  margin: 30px 0;
  padding: 7px 20px;
  background: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  & :hover {
    background: ${COLORS.PRIMARY_COLOR};
    color: white;
  }
  &: focus {
    outline: none;
  }
`;
