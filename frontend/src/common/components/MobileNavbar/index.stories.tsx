import { Meta, Story } from '@storybook/react/types-6-0';

import MobileNavbar from '.';

export default {
  title: 'common/components/MobileNavbar',
  component: MobileNavbar,
} as Meta;

const Template: Story = (args) => <MobileNavbar {...args} />;

export const Default = Template.bind({});
