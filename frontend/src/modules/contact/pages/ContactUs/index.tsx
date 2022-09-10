import { Col } from 'antd';
import Head from 'next/head';

import Container from 'common/components/Container';
import Heading from 'common/components/Heading';
import CommonLayout from 'common/components/Layouts/CommonLayout';
import colors from 'common/constants/colors';

import BadgeContactSection from 'modules/contact/components/BadgeContactSection';
import {
  CONTACT_US_TITLE,
  DEFAULT_CONTACT_ADDRESS,
  DEFAULT_CONTACT_EMAIL,
  DEFAULT_CONTACT_PHONE,
  DEFAULT_GMAPS_URL,
} from 'modules/contact/constants';

import { BREADCRUMB, HEADER_BACKGROUND_IMAGE } from './constants';
import { Address, ContactDetail, ContactSection, StyledRow } from './styled';

const ContactUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>{CONTACT_US_TITLE}</title>
      </Head>
      <CommonLayout
        header="ติดต่อเรา"
        navigate={BREADCRUMB}
        headerBackgroundImage={HEADER_BACKGROUND_IMAGE}>
        <Container>
          <ContactSection>
            <StyledRow>
              <Col span={12}>
                <StyledRow>
                  <Heading variant="h2" color={colors.PRIMARY_COLOR}>
                    ที่อยู่
                  </Heading>
                  <Address>{DEFAULT_CONTACT_ADDRESS}</Address>
                </StyledRow>
                <StyledRow>
                  <Heading variant="h2" color={colors.PRIMARY_COLOR}>
                    ติดต่อ
                  </Heading>
                  <ContactDetail>
                    <p>{DEFAULT_CONTACT_PHONE}</p>
                    <p>{DEFAULT_CONTACT_EMAIL}</p>
                  </ContactDetail>
                </StyledRow>
              </Col>
              <Col span={12}>
                <iframe
                  title="KMUTT CPE"
                  src={DEFAULT_GMAPS_URL}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"></iframe>
              </Col>
            </StyledRow>
          </ContactSection>
        </Container>
        <BadgeContactSection />
      </CommonLayout>
    </>
  );
};

export default ContactUs;
