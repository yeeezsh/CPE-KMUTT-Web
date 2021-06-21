import * as React from 'react';

import { shallow } from 'enzyme';

import { StyledButton, StyledModal } from './styled';

import Carousel from './index';

const testItem = [
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
  },
  {
    id: 2,
    picture: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    heading: 'Test Test',
    caption: 'Here is caption',
    link: '#',
  },
];
describe('Carousel Tests', () => {
  it('Carousel component should be defined', () => {
    const wrap = shallow(<Carousel item={testItem} variant="Default" />);
    expect(wrap.exists()).toBe(true);
  });
  it('Read more button should be defined', () => {
    const wrap = shallow(<Carousel item={testItem} variant="Slider" />);
    const readMoreButton = wrap.find(StyledButton);
    expect(readMoreButton.exists()).toBe(true);
  });
  it('Modal should be defined', () => {
    const wrap = shallow(<Carousel item={testItem} variant="Slider" />);
    const modal = wrap.find(StyledModal);
    expect(modal.exists()).toBe(true);
  });
  it('Initial value of modal visibility should be false', () => {
    const wrap = shallow(<Carousel item={testItem} variant="Slider" />);
    const isModalVisible = wrap.find(StyledModal).prop('visible').valueOf();
    expect(isModalVisible).toBe(false);
  });
  it('Should change isModalVisible to true when อ่านต่อเพิ่มเติม button is clicked', () => {
    const wrap = shallow(<Carousel item={testItem} variant="Slider" />);
    wrap.find(StyledButton)?.first().simulate('click');
    const isModalVisible = wrap.find(StyledModal).prop('visible')?.valueOf();
    expect(isModalVisible).toBe(true);
  });
});
