import COLORS from 'common/constants/colors';
import styled from 'styled-components';

interface WrapperProps {
  defaultMargin: boolean;
}

export const NavigationWrapper = styled.div`
  position: relative;
  margin: ${(props: WrapperProps) => (props.defaultMargin ? '0 auto' : '100px auto')};
`;

export const Section = styled.div`
  padding-right: 450px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-bottom: 40px;
`;

export const Heading = styled.p`
  font-family: Kanit;
  font-weight: bold;
  font-size: 28px;
  color: ${COLORS.PRIMARY_COLOR};
  margin: 0;
`;

export const Description = styled.p`
  font-family: Kanit;
  font-size: 14px;
  color: ${COLORS.GRAY_2};
  margin: 0;
`;

export const StyledButton = styled.button`
  color: ${COLORS.PRIMARY_COLOR};
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;
  height: 40px;
  margin: 30px 0;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 600;

  &:focus {
    outline: none;
  }
  &:hover {
    text-decoration: underline;
    color: ${COLORS.PRIMARY_COLOR};
  }
`;
