import { shallow } from 'enzyme';
import * as React from 'react';
import Home from '.';

describe('browseNews page', () => {
  it('browseNews page should be defined', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists()).toBe(true);
  });
});
