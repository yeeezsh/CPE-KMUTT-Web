import { FC } from 'react';

import { Container, Content, Gradient, Subtitle, Title } from './styled';
import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <Container $backgroundImage={backgroundImage}>
      <Gradient>
        <Content>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Content>
      </Gradient>
    </Container>
  );
};

export default Header;
