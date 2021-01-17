import { shallow } from 'enzyme';
import * as React from 'react';
import WhatNewSection from '.';

describe('Index page', () => {
  it('Index page should be defined', () => {
    const wrap = shallow(<WhatNewSection />);
    expect(wrap.exists()).toBe(true);
  });
});
