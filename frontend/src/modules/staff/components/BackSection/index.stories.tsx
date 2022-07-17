import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import BackSection from '.';

export default {
  title: 'modules/staff/components/BackSection',
  component: BackSection,
} as Meta;

const Template: Story = (args) => <BackSection {...args} />;

export const Default = Template.bind({});
