import * as React from 'react';

import { shallow } from 'enzyme';

import Footer from '.';

describe('Index page', () => {
  it('Index page should be defined', () => {
    const wrap = shallow(<Footer key="1" />);
    expect(wrap.exists()).toBe(true);
  });
});
