import Container from 'common/components/Container';
import { shallow } from 'enzyme';
import React from 'react';
import BrowseNews from '.';
import {
  BrowseNewsRow,
  BrowseNewsSeeMore,
  BrowseNewsStyle,
  BrowsNewsHeader,
} from './styled';

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
