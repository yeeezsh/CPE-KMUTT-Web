import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import BadgeContact from '.';

const meta: Meta = {
  title: 'common/components/BadgeContact',
  component: BadgeContact,
};

export default meta;

export const Default: React.FC = () => <BadgeContact></BadgeContact>;
