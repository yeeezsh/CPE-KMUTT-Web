import { shallow } from 'enzyme';
import React from 'react';
import BrowseNewsPage from '.';

describe('browseNews page', () => {
  it('browseNews page should be defined', () => {
    const wrap = shallow(<BrowseNewsPage />);
    expect(wrap.exists()).toBe(true);
  });
});
