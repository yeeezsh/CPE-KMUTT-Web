import { shallow } from 'enzyme';
import React from 'react';
import BrowseNews from '.';
import { BrowseNewsStyle } from './styled';

describe('BrowseNews Compnent', () => {
  it('BrowseNews Compnent should be defined', () => {
    const wrap = shallow(<BrowseNews />);
    expect(wrap.exists()).toBe(true);
  });

  it('BrowseNews Compnent should import these components', () => {
    const wrap = shallow(<BrowseNews />);
    expect(wrap.find(BrowseNewsStyle).exists()).toBe(true);
  });
});
