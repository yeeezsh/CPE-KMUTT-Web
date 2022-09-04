import { Meta, Story } from '@storybook/react/types-6-0';

import { NavbarContext } from 'common/contexts/navbarContext';

import MobileNavbar from '.';

export default {
  title: 'common/components/MobileNavbar',
  component: MobileNavbar,
} as Meta;

const Template: Story = (args) => {
  return (
    <NavbarContext.Provider
      value={{
        isMobileMenuOpened: true,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setIsMobileMenuOpened: () => {},
      }}>
      <MobileNavbar {...args} />;
    </NavbarContext.Provider>
  );
};

export const Default = Template.bind({});
