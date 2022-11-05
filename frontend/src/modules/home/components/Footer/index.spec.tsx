import React from 'react';

import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { store } from 'common/stores';

import Footer from '.';

describe('Index page', () => {
  it('Index page should be defined', () => {
    const wrap = shallow(
      <Provider store={store}>
        <Footer key="1" />
      </Provider>,
    );
    expect(wrap.exists()).toBe(true);
  });
});
