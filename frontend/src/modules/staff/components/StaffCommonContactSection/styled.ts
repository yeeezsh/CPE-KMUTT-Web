import styled from 'styled-components';

import Heading from 'common/components/Heading';
import Shadow from 'common/styles/utility/shadow';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: ${Shadow.Card};
  display: flex;
  padding: 14px;
  flex-wrap: wrap;
  margin-bottom: -10px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const Title = styled(Heading)`
  margin: 0;
`;
