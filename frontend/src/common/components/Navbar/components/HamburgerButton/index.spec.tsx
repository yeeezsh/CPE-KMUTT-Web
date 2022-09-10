import React from 'react';

import { mount } from 'enzyme';

import 'jest-styled-components';

import { StyledMenuButton } from 'common/components/Navbar/components/HamburgerButton/styled';

import HamburgerButton from '.';

describe('<HamburgerButton />', () => {
  const onClick = jest.fn();
  it('Should call onClick when clicked', () => {
    const wrapper = mount(<HamburgerButton visible={false} onClick={onClick} />);

    wrapper.find(StyledMenuButton).simulate('click');
    expect(onClick).toBeCalled();
  });
});
