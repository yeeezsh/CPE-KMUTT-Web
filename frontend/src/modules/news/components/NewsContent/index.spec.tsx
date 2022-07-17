import React from 'react';

import { render, shallow } from 'enzyme';

import Container from 'common/components/Container';

import {
  NewsContentTumbnail,
  NewsContentContainer,
  NewsContentFileContainer,
  NewsContentFileHeader,
  NewsContentFileList,
  NewsContentFileName,
  NewsContentFileNameContainer,
  NewsContentHeader,
  NewsContentPostDate,
  NewsContentStyle,
} from './styled';

import NewsContent from '.';

describe('NewsContent Compnent', () => {
  it('NewsContent Compnent should be defined', () => {
    const wrap = shallow(<NewsContent tumbnail="/images/thumbnail2.png" />);
    expect(wrap.exists()).toBe(true);
  });

  it('NewsContent shoyld matched snapshots', () => {
    const wrap = render(<NewsContent tumbnail="/images/thumbnail2.png" />);
    expect(wrap).toMatchSnapshot();
  });

  it('NewsContent Compnent should import these components', () => {
    const wrap = shallow(<NewsContent tumbnail="/images/thumbnail2.png" />);
    expect(wrap.find(NewsContentTumbnail).exists()).toBe(true);
    expect(wrap.find(Container).exists()).toBe(true);
    // expect(wrap.find(NewsContentContainer).exists()).toBe(true);
    // expect(wrap.find(NewsContentFileContainer).exists()).toBe(true);
    // expect(wrap.find(NewsContentFileHeader).exists()).toBe(true);
    // expect(wrap.find(NewsContentFileList).exists()).toBe(true);
    // expect(wrap.find(NewsContentFileName).exists()).toBe(true);
    // expect(wrap.find(NewsContentFileNameContainer).exists()).toBe(true);
    expect(wrap.find(NewsContentHeader).exists()).toBe(true);
    expect(wrap.find(NewsContentPostDate).exists()).toBe(true);
    expect(wrap.find(NewsContentStyle).exists()).toBe(true);
  });

  it('NewsContent should show content section when have data from API', () => {
    const wrap = shallow(
      <NewsContent
        tumbnail="/images/thumbnail2.png"
        contents={[<NewsContentContainer key={'1'}>news content</NewsContentContainer>]}
      />,
    );
    expect(wrap.find(NewsContentContainer).exists()).toBe(true);
  });

  it('NewsContent should show download section when have data from API', () => {
    const wrap = shallow(<NewsContent file={[{ title: 'test', link: '/' }]} />);
    expect(wrap.find(NewsContentFileContainer).exists()).toBe(true);
    expect(wrap.find(NewsContentFileHeader).exists()).toBe(true);
    expect(wrap.find(NewsContentFileList).exists()).toBe(true);
    expect(wrap.find(NewsContentFileName).exists()).toBe(true);
    expect(wrap.find(NewsContentFileNameContainer).exists()).toBe(true);
  });
});
