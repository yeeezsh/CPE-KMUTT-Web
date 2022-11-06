import { Meta, Story } from '@storybook/react/types-6-0';

import FaqBanner from 'common/components/FaqBanner';

export default {
  title: 'Common/FaqBanner',
  component: FaqBanner,
} as Meta;

const Template: Story = (args) => <FaqBanner {...args} />;

export const Default = Template.bind({});
