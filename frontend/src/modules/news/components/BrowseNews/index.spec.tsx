import React from 'react';

import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import Container from 'common/components/Container';
import { store } from 'common/stores';

import {
  BrowseNewsRow,
  BrowseNewsSeeMore,
  BrowseNewsStyle,
  BrowsNewsHeader,
} from './styled';

import BrowseNews from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    query: {
      id: '1',
    },
    beforePopState: jest.requireActual('next/router'),
  })),
}));

describe('BrowseNews Compnent', () => {
  it('BrowseNews Compnent should be defined', () => {
    const wrap = shallow(
      <Provider store={store}>
        <BrowseNews />
      </Provider>,
    );
    expect(wrap.exists()).toBe(true);
  });

  it('BrowseNews Compnent should import these components', () => {
    const wrap = mount(
      <Provider store={store}>
        <BrowseNews />
      </Provider>,
    );
    expect(wrap.find(BrowseNewsStyle).exists()).toBe(true);
    expect(wrap.find(Container).exists()).toBe(true);
    expect(wrap.find(BrowsNewsHeader).exists()).toBe(true);
    expect(wrap.find(BrowseNewsRow).exists()).toBe(true);
    expect(wrap.find(BrowseNewsSeeMore).exists()).toBe(true);
  });
});
