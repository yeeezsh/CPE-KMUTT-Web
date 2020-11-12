import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Container from '.';

export default {
  title: 'Commmon/Container',
  component: Container,
  argTypes: {
    variants: {
      control: {
        type: 'select',
        options: ['Default', 'Primary'],
      },
    },
  },
} as Meta;

export const Default: React.FC = () => <Container>Container</Container>;
