import { Meta, Story } from '@storybook/react/types-6-0';

import Card from 'common/components/Card';
import { CardVariant } from 'common/components/Card/types';
import CardsLayout from 'common/components/Layouts/CardsLayout';

import { GlobalStyle } from 'modules/root/pages/App/styled';

export default {
  title: 'Common/Layouts/CardsLayout',
  component: CardsLayout,
} as Meta;

const CardsLayoutStory: Story = (args) => (
  <>
    <GlobalStyle />
    <CardsLayout {...args} />
  </>
);

export const Default = CardsLayoutStory.bind({});

Default.args = {
  children: Array(3).fill(
    <Card
      title="การรับเข้าศึกษา"
      description="ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563"
      date="28 ตุลาคม 2563"
      id="1"
      variant={CardVariant.normal}
    />,
  ),
};
