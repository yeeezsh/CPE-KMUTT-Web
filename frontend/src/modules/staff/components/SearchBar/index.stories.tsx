import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import SearchBar from '.';

export default {
  title: 'modules/staff/components/SearchBar',
  component: SearchBar,
} as Meta;

const Template: Story = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
