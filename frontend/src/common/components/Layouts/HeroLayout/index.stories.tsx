import { Meta, Story } from '@storybook/react/types-6-0';

import { GlobalStyle } from 'modules/root/pages/App/styled';

import { HeroLayoutProps } from './types';

import HeroLayout from '.';

export default {
  title: 'Common/Layouts/Hero',
  component: HeroLayout,
} as Meta;

const CommonLayoutStory: Story<HeroLayoutProps> = (args) => (
  <>
    <GlobalStyle />
    <HeroLayout {...args}>
      <div></div>
    </HeroLayout>
  </>
);

export const Default = CommonLayoutStory.bind({});

export const DefaultWithoutBanner = CommonLayoutStory.bind({});
