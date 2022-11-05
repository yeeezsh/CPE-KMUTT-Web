import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';

import Navbar from 'common/components/Navbar';
import { store } from 'common/stores';

export default {
  title: 'common/components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story = (args) => (
  <Provider store={store}>
    <Navbar {...args} />
  </Provider>
);

export const Default = Template.bind({});
