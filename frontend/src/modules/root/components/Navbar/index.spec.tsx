import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Navbar from '.';

describe('Navbar Tests', () => {
  it('Navbar component should be defined', () => {
    const wrap = shallow(<Navbar />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should change visible to true', () => {
    const wrapper = mount(<Navbar />);
    const hamburgerButton = wrapper.find('Dropdown').simulate('click');

    expect(hamburgerButton.prop('visible')).toBeTruthy();
  });
});
