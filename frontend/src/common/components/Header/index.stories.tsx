import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { HeaderProps } from './types';

import Header from '.';

export default {
  title: 'common/components/Header',
  component: Header,
  args: {
    title: 'เกี่ยวกับเรา',
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  title: 'เกี่ยวกับเรา',
  subtitle: 'About us',
};
