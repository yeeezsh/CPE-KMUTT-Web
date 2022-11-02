import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { H1 } from 'common/components/Heading/styled';

import { DividerProps } from './types';

import Divider from '.';

export default {
  title: 'common/components/Divider',
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});

export const WithHeader = Template.bind({});
WithHeader.args = {
  header: <H1>H1</H1>,
} as DividerProps;
