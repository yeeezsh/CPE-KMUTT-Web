import { Meta, Story } from '@storybook/react/types-6-0';
import { GlobalStyle } from 'modules/root/pages/App/styled';
import CommonLayout from '.';
import { CommonLayoutProps } from './types';

const MOCK_NAVIGATE = [
  {
    link: '/',
    title: 'หน้าแรก',
  },
  {
    link: '/',
    title: 'ประกาศ',
  },
  {
    link: '/',
    title: 'สำหรับนักศึกษาใหม่',
  },
];

export default {
  title: 'Common/Layouts/Common',
  component: CommonLayout,
} as Meta;

const CommonLayoutStory: Story<CommonLayoutProps> = (args) => (
  <>
    <GlobalStyle />
    <CommonLayout {...args}>
      <div></div>
    </CommonLayout>
  </>
);

export const Default = CommonLayoutStory.bind({});

Default.args = {
  header: 'ข่าวสารและประกาศ',
  navigate: MOCK_NAVIGATE,
  withFaqBanner: true,
} as CommonLayoutProps;

export const DefaultWithoutBanner = CommonLayoutStory.bind({});

DefaultWithoutBanner.args = {
  header: 'ข่าวสารและประกาศ',
  navigate: MOCK_NAVIGATE,
  withFaqBanner: false,
} as CommonLayoutProps;
