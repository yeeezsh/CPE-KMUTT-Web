import React from 'react';

import { shallow } from 'enzyme';

import Container from 'common/components/Container';

import {
  BrowseNewsRow,
  BrowseNewsSeeMore,
  BrowseNewsStyle,
  BrowsNewsHeader,
} from './styled';

import BrowseNews from '.';

describe('BrowseNews Compnent', () => {
  it('BrowseNews Compnent should be defined', () => {
    const wrap = shallow(<BrowseNews />);
    expect(wrap.exists()).toBe(true);
  });

  it('BrowseNews Compnent should import these components', () => {
    const wrap = shallow(<BrowseNews />);
    expect(wrap.find(BrowseNewsStyle).exists()).toBe(true);
    expect(wrap.find(Container).exists()).toBe(true);
    expect(wrap.find(BrowsNewsHeader).exists()).toBe(true);
    expect(wrap.find(BrowseNewsRow).exists()).toBe(true);
    expect(wrap.find(BrowseNewsSeeMore).exists()).toBe(true);
  });
});
