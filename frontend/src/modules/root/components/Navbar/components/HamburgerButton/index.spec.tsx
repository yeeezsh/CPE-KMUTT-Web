import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import * as HamburgerButtonType from '.';

describe('<HamburgerButton />', () => {
  const { default: HamburgerButton } = require('.') as typeof HamburgerButtonType;

  it('should be match to snapshot when visible', () => {
    const wrapper = shallow(<HamburgerButton visible={true} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be match to snapshot when not visible', () => {
    const wrapper = shallow(<HamburgerButton visible={false} />);

    expect(wrapper).toMatchSnapshot();
  });
});
