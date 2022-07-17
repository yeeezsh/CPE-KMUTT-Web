import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { DividerProps } from './types';

import Divider from '.';

export default {
  title: 'common/components/Divider',
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
