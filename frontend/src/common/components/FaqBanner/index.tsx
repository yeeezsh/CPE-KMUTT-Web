import { FC } from 'react';

import { useRouter } from 'next/router';
import { HiOutlineArrowRight } from 'react-icons/hi';

import { Btn } from 'common/components/Button/styled';
import { STATIC_CONTACT_US } from 'common/constants/links';
import baseUrl from 'common/utils/baseUrl';

import { HOME_CONTENTS } from 'modules/home/constants';

import { Row, Column, Header, Content, Button } from './styled';

const ICON_SIZE = '16px';

const FaqBanner: FC = () => {
  const router = useRouter();

  function onClickLink() {
    router.push(STATIC_CONTACT_US);
  }
  return (
    <Row className="align-center">
      <Column>
        <Header>{HOME_CONTENTS.question.header}</Header>
        <Content>{HOME_CONTENTS.question.content}</Content>
        <Button onClick={onClickLink}>
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
  );
};

export default FaqBanner;
