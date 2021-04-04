import { shallow } from 'enzyme';
import * as React from 'react';
import WhatNewSection from '.';

describe('WhatNewSection Compnent', () => {
  it('WhatNewSection Compnent should be defined', () => {
    const wrap = shallow(<WhatNewSection />);
    expect(wrap.exists()).toBe(true);
  });
});
