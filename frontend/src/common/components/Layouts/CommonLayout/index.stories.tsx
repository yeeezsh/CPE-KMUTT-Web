import { Meta, Story } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';

import { store } from 'common/stores';

import { GlobalStyle } from 'modules/root/pages/App/styled';

import { CommonLayoutProps } from './types';

import CommonLayout from '.';

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
    <Provider store={store}>
      <GlobalStyle />
      <CommonLayout {...args}>
        <div></div>
      </CommonLayout>
    </Provider>
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
