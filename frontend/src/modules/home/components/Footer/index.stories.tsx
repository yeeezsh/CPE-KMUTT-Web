import { Meta, Story } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';

import { store } from 'common/stores';

import Footer from 'modules/home/components/Footer';
import { GlobalStyle } from 'modules/root/pages/App/styled';

export default {
  title: 'common/components/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => (
  <Provider store={store}>
    <GlobalStyle />
    <Footer {...args} />
  </Provider>
);

export const Default = Template.bind({});
