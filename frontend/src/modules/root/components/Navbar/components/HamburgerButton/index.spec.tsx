import React from 'react';

import { shallow, mount } from 'enzyme';

import 'jest-styled-components';

import { StyledMenuButton } from 'modules/root/components/Navbar/components/HamburgerButton/styled';

import HamburgerButton from '.';

describe('<HamburgerButton />', () => {
  const onClick = jest.fn();
  it('Should call onClick when clicked', () => {
    const wrapper = mount(<HamburgerButton visible={false} onClick={onClick} />);

    wrapper.find(StyledMenuButton).simulate('click');
    expect(onClick).toBeCalled();
  });

  it('should be match to snapshot when visible', () => {
    const wrapper = shallow(<HamburgerButton visible={true} onClick={onClick} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be match to snapshot when not visible', () => {
    const wrapper = shallow(<HamburgerButton visible={false} onClick={onClick} />);

    expect(wrapper).toMatchSnapshot();
  });
});
