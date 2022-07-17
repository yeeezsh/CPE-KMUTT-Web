import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import MOCK_STAFF from 'modules/staff/mocks/staff';

import { StaffContactSectionProps } from './types';

import StaffContactSection from '.';

export default {
  title: 'modules/staff/components/StaffContactSection',
  component: StaffContactSection,
  args: {
    staff: MOCK_STAFF,
  },
} as Meta;

const Template: Story<StaffContactSectionProps> = (args) => (
  <StaffContactSection {...args} />
);

export const Default = Template.bind({});
