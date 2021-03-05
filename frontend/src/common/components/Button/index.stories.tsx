import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { HiOutlineArrowRight } from 'react-icons/hi';

import { ButtonProps } from './types';

import Button from '.';

export default {
  title: 'Commmon/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>
    สำรวจหลักสูตรทั้งหมด
    <HiOutlineArrowRight className="Icon" style={{ marginLeft: '15px' }} size="20px" />
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  $color: 'primary',
};

export const Transparent = Template.bind({});
Transparent.args = {
  $color: 'transparent',
};
