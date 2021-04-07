import SubMenu from 'antd/lib/menu/SubMenu';
import { shallow } from 'enzyme';
import * as React from 'react';
import { Menu, MenuWrap } from './styled';

describe('Navbar Tests', () => {
  it('Navbar menu should be defined', () => {
    const wrap = shallow(<MenuWrap />);
    expect(wrap.exists()).toBe(true);
  });
  it('Menu should be defined', () => {
    const wrap = shallow(<Menu />);
    expect(wrap.exists()).toBe(true);
  });
  it('Submenu should be defined', () => {
    const wrap = shallow(<SubMenu />);
    expect(wrap.exists()).toBe(true);
  });
});
