import { Meta, Story } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';

import { NavbarContext } from 'common/contexts/navbarContext';
import { store } from 'common/stores';

import MobileNavbar from '.';

export default {
  title: 'common/components/MobileNavbar',
  component: MobileNavbar,
} as Meta;

const Template: Story = (args) => {
  return (
    <Provider store={store}>
      <NavbarContext.Provider
        value={{
          isMobileMenuOpened: true,
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          setIsMobileMenuOpened: () => {},
        }}>
        <MobileNavbar {...args} />;
      </NavbarContext.Provider>
    </Provider>
  );
};

export const Default = Template.bind({});
