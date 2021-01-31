import { shallow } from 'enzyme';
import * as React from 'react';
import Footer from '.';

describe('Index page', () => {
  it('Index page should be defined', () => {
    const wrap = shallow(<Footer id="1" />);
    expect(wrap.exists()).toBe(true);
  });
});
