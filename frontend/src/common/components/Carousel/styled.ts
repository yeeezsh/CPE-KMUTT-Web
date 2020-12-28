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
  color: #4a60ac;
  margin: 0;
`;

export const Description = styled.p`
  font-family: Kanit;
  font-size: 14px;
  color: #666666;
  margin: 0;
`;

export const StyledButton = styled.button`
  color: #4a60ac;
  width: fit-content;
  height: 40px;
  border: none;
  margin: 30px 0;
  padding: 0 20px;
  background: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &: focus {
    outline: none;
  }
`;
