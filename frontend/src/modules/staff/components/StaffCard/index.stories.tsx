import { Meta, Story } from '@storybook/react/types-6-0';

import MOCK_STAFF from 'modules/staff/mocks/staff';

import { StaffCardProps } from './types';

import StaffCard from '.';

export default {
  title: 'modules/staff/components/StaffCard',
  component: StaffCard,
  args: {
    staff: MOCK_STAFF,
  },
} as Meta;

const Template: Story<StaffCardProps> = (args) => <StaffCard {...args} />;

export const Default = Template.bind({});
