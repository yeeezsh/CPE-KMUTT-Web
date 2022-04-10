import * as React from 'react';

import { shallow } from 'enzyme';

import BadgeContact from './index';

describe('Badge Contact List Test', () => {
  it('Badge Context List component should be defined', () => {
    const wrap = shallow(<BadgeContact />);
    expect(wrap.exists()).toBe(true);
  });
});
