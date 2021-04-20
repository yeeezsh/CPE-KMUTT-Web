import { shallow } from 'enzyme';
import 'jest-styled-components';
import * as React from 'react';
import * as NavbarType from '.';

describe('Navbar Tests', () => {
  const showDropdownSpy = jest.fn();
  const useDropdownSpy = jest.fn();
  jest.doMock('./hooks/useDropdown', () => useDropdownSpy);

  const HamburgerButtonSpy = jest.fn();
  jest.doMock('./components/HamburgerButton', () => HamburgerButtonSpy);

  const { default: Navbar } = require('.') as typeof NavbarType;

  beforeEach(() => {
    useDropdownSpy.mockReturnValue({
      visible: false,
      showDropdown: showDropdownSpy,
    });
  });

  it('Navbar component should be defined', () => {
    const wrapper = shallow(<Navbar visible />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be display EN when not visible', () => {
    const wrapper = shallow(<Navbar visible />);

    expect(wrapper.contains('EN')).toBeDefined();
  });

  it('should be not display EN when visible', () => {
    useDropdownSpy.mockReturnValue({
      visible: true,
    });

    const wrapper = shallow(<Navbar visible />);

    expect(wrapper.contains('EN')).toBe(false);
  });

  //it('should be render HamburgerButton with props correctly', () => {
  //  render(<Navbar visible />);

  //  expect(HamburgerButtonSpy).toBeCalledTimes(1);
  //  expect(HamburgerButtonSpy).toBeCalledWith({
  //    onClick: showDropdownSpy,
  //    visible: false,
  //  });
  //});
});
