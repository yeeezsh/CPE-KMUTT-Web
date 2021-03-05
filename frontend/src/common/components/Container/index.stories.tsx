import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import Container from '.';

const meta: Meta = {
  title: 'Commmon/Container',
  component: Container,
};

export default meta;

export const Default: React.FC = () => <Container>Container</Container>;
