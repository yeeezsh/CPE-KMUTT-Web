import { shallow } from 'enzyme';
import * as React from 'react';
import StaticSection from '.';

describe('Index page', () => {
  it('Index page should be defined', () => {
    const wrap = shallow(
      <StaticSection id="1" background="/images/static_bg_curriculum.png" />,
    );
    expect(wrap.exists()).toBe(true);
  });
});
