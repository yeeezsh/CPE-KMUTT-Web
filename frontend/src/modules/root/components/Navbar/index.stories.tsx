import { Meta, Story } from '@storybook/react/types-6-0';
import Navbar from 'modules/root/components/Navbar';
import React from 'react';
import { NavBarProps } from './interface';

export default {
  title: 'modules/root/components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story = (args) => <Navbar visible {...args} />;

export const Default = Template.bind({});

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
} as NavBarProps;
