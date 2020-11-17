import { Meta } from '@storybook/react/types-6-0';
import Navbar from 'modules/root/components/Navbar';
import React from 'react';

const meta: Meta = {
  title: 'modules/root/components/Navbar',
  component: Navbar,
};

export default meta;

export const Default: React.FC = () => <Navbar />;
