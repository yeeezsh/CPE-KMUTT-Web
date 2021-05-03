import React from 'react';

import { shallow } from 'enzyme';

import 'jest-styled-components';

import NavbarMenu from '.';

describe('Navbar Tests', () => {
  it('Navbar menu should be defined', () => {
    const wrapper = shallow(<NavbarMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
