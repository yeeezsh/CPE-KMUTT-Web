import * as React from 'react';

import { shallow } from 'enzyme';

import 'jest-styled-components';

import * as NavbarMenuType from '.';

describe('Navbar Tests', () => {
  const { default: NavbarMenu } = require('.') as typeof NavbarMenuType;
  it('Navbar menu should be defined', () => {
    const wrapper = shallow(<NavbarMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
