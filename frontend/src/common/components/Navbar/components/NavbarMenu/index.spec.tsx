import 'jest-styled-components';

import React from 'react';

import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { store } from 'common/stores';

import NavbarMenu from '.';

describe('Navbar Tests', () => {
  it('Navbar menu should be defined', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NavbarMenu />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
