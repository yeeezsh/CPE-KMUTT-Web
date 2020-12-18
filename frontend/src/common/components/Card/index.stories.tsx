import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Card from '.';

const meta: Meta = {
  title: 'Commmon/Card',
  component: Card,
};

export default meta;

export const Default: React.FC = () => <Card id="1" />;
