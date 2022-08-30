import { FC } from 'react';

import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

import Heading from 'common/components/Heading';
import colors from 'common/constants/colors';
import { STATIC_STAFFS } from 'common/constants/links';

import { Container } from './styled';

const BackSection: FC = () => {
  return (
    <Container>
      <Link href={{ pathname: STATIC_STAFFS }}>
        <a>
          <BiArrowBack />
        </a>
      </Link>
      <Heading variant="h2" color={colors.PRIMARY_COLOR}>
        บุคลากร
      </Heading>
    </Container>
  );
};

export default BackSection;
