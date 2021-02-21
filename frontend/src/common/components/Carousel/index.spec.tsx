import { shallow } from 'enzyme';
import * as React from 'react';
import Carousel from './index';

describe('Carousel Tests', () => {
  const props = {
    item: [
      {
        id: 0,
        picture: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        heading: 'Test',
        caption: 'This is caption',
        link: '#',
      },
      {
        id: 1,
        picture: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        heading: 'Test++',
        caption: 'Caption is here',
        link: '#',
      },
    ],
    fullText: false,
    arrows: true,
  };
  it('Carousel component should be defined', () => {
    const wrap = shallow(<Carousel variant="Default" {...props} />);
    expect(wrap.exists()).toBe(true);
  });
});
