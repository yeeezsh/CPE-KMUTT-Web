import { shallow } from 'enzyme';
import * as React from 'react';
import BrowseNews from '.';

describe('BrowseNews Compnent', () => {
  it('BrowseNews Compnent should be defined', () => {
    const wrap = shallow(<BrowseNews />);
    expect(wrap.exists()).toBe(true);
  });
});
