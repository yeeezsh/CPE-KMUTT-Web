import { Dropdown } from 'antd';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Navbar from '.';
import { Cancel, LogoCPE, LogoKMUTT } from './styled';

describe('Navbar Tests', () => {
  it('Navbar component should be defined', () => {
    const wrap = shallow(<Navbar visible />);
    expect(wrap.exists()).toBe(true);
  });
  it('Should have KMUTT logo', () => {
    const wrap = shallow(<Navbar visible />);
    const logoVisible = wrap.find(LogoKMUTT);
    expect(logoVisible.exists()).toBe(true);
  });
  it('Should have CPE logo', () => {
    const wrap = shallow(<Navbar visible />);
    const logoVisible = wrap.find(LogoCPE);
    expect(logoVisible.exists()).toBe(true);
  });
  it('Should have hamburger button', () => {
    const wrap = shallow(<Navbar visible />);
    const hamburger = wrap.find(Dropdown);
    expect(hamburger.exists()).toBe(true);
  });
  it('Should change visible to true when hamburger is clicked', () => {
    const wrapper = mount(<Navbar visible />);
    wrapper.find(Dropdown).simulate('click');
    const dropdownVisible = wrapper.find(Dropdown).prop('visible')?.valueOf();
    expect(dropdownVisible).toBe(true);
  });
  it('Should change hamburger to cancel', () => {
    const wrapper = mount(<Navbar visible />);
    wrapper.find(Dropdown).simulate('click');
    const cancelButton = wrapper.find(Cancel);
    expect(cancelButton.exists()).toBe(true);
  });
});
