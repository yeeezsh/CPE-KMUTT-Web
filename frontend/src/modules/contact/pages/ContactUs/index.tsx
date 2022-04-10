import { Col } from 'antd';
import Head from 'next/head';

import Container from 'common/components/Container';
import Heading from 'common/components/Heading';
import CommonLayout from 'common/components/Layouts/CommonLayout';
import colors from 'common/constants/colors';

import BadgeContactSection from 'modules/contact/components/BadgeContactSection';
import { CONTACT_US_TITLE } from 'modules/contact/constants';

import { BREADCRUMB } from './constants';
import { Address, ContactDetail, ContactSection, StyledRow } from './styled';

const ContactUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>{CONTACT_US_TITLE}</title>
      </Head>
      <CommonLayout header="ติดต่อเรา" navigate={BREADCRUMB}>
        <Container>
          <ContactSection>
            <StyledRow>
              <Col span={12}>
                <StyledRow>
                  <Heading variant="h2" color={colors.PRIMARY_COLOR}>
                    ที่อยู่
                  </Heading>
                  <Address>
                    {`
                  ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ 
                  ชั้น 10-11, อาคารวิศววัฒนะ,
                  มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี 126 ถนนประชาอุทิศ แขวงบางมด
                  เขตทุ่งครุ กรุงเทพฯ 10140
                  `}
                  </Address>
                </StyledRow>
                <StyledRow>
                  <Heading variant="h2" color={colors.PRIMARY_COLOR}>
                    ติดต่อ
                  </Heading>
                  <ContactDetail>
                    <p>(+66) 0 2470 9388</p>
                    <p>nongyao.jam@mail.kmutt.ac.th</p>
                  </ContactDetail>
                </StyledRow>
              </Col>
              <Col span={12}>
                <iframe
                  title="KMUTT CPE"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.1330306733955!2d100.49378030791785!3d13.649757914204436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a252224fdc01%3A0xdb5f69b03ef7ef07!2sComputer%20Engineering%20Department%2C%20KMUTT!5e0!3m2!1sen!2sth!4v1649610824894!5m2!1sen!2sth"
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
