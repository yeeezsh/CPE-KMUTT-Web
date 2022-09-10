import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import Navbar from 'common/components/Navbar';

import { NavBarProps } from './interface';

export default {
  title: 'common/components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
} as NavBarProps;
