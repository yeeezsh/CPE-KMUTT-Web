import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Button from '.';

export default {
  title: 'Commmon/Button',
  component: Button,
  argTypes: {
    variants: {
      control: {
        type: 'select',
        options: ['Default', 'Primary'],
      },
    },
  },
} as Meta;

export const Default: React.FC = () => <Button>Button</Button>;
