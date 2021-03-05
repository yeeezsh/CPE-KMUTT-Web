import * as React from 'react';

import { shallow } from 'enzyme';

import Home from '.';

describe('Index page', () => {
  it('Index page should be defined', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists()).toBe(true);
  });
});
