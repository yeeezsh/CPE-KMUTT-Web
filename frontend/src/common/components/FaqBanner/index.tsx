import { FC } from 'react';

import { HiOutlineArrowRight } from 'react-icons/hi';

import { Btn } from 'common/components/Button/styled';
import baseUrl from 'common/utils/baseUrl';

import { Container, Row, Column, Header, Content, Button } from './styled';

const ICON_SIZE = '16px';

const FaqBanner: FC = () => (
  <Container>
    <Row className="align-center">
      <Column>
        <Header>มีคำถามหรือข้อสงสัย</Header>
        <Content>เซ็นเตอร์เวิร์คฟลุทแอดมิสชันออร์แกน</Content>
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
        <img src={baseUrl('/images/annouce_faq.png')} alt="" />
      </Column>
    </Row>
  </Container>
);

export default FaqBanner;
