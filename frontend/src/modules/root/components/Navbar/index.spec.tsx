import { Dropdown } from 'antd';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Navbar from '.';
import { Cancel } from './styled';

describe('Navbar Tests', () => {
  it('Navbar component should be defined', () => {
    const wrap = shallow(<Navbar />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should change visible to true when hamburger is clicked', () => {
    const wrapper = mount(<Navbar />);
    wrapper.find(Dropdown).simulate('click');
    const dropdownVisible = wrapper.find(Dropdown).prop('visible')?.valueOf();
    expect(dropdownVisible).toBeTruthy();
  });

  it('Should change hamburger to cancel', () => {
    const wrapper = mount(<Navbar />);
    wrapper.find(Dropdown).simulate('click');
    const cancelButton = wrapper.find(Cancel);
    expect(cancelButton.exists()).toBe(true);
  });
});
