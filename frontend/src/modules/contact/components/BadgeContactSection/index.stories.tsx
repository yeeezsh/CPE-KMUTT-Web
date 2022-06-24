import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import BadgeContactSection from '.';

const meta: Meta = {
  title: 'modules/contact/components/BadgeContactSection',
  component: BadgeContactSection,
};

export default meta;

export const Default: React.FC = () => <BadgeContactSection></BadgeContactSection>;
