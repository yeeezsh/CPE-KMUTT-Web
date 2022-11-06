import { FC } from 'react';

import { HiOutlineArrowRight } from 'react-icons/hi';

import { Btn } from 'common/components/Button/styled';
import baseUrl from 'common/utils/baseUrl';

import { HOME_CONTENTS } from 'modules/home/constants';

import { Container, Row, Column, Header, Content, Button } from './styled';

const ICON_SIZE = '16px';

const FaqBanner: FC = () => (
  <Container>
    <Row className="align-center">
      <Column>
        <Header>{HOME_CONTENTS.question.header}</Header>
        <Content>{HOME_CONTENTS.question.content}</Content>
        <Button>
          <Btn $color={'transparent'}>
            ติดต่อเรา
            <HiOutlineArrowRight
              className="Icon"
              style={{ marginLeft: '16px' }}
              size={ICON_SIZE}
            />
          </Btn>
        </Button>
      </Column>
      <Column>
        <img src={baseUrl(HOME_CONTENTS.question.background)} alt="" />
      </Column>
    </Row>
  </Container>
);

export default FaqBanner;
