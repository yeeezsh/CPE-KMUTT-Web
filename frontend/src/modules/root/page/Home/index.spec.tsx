import { shallow } from 'enzyme';
import * as React from 'react';
import Home from '.';

describe('Index page', () => {
  it('Index page should be defined', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists()).toBe(true);
  });
});
