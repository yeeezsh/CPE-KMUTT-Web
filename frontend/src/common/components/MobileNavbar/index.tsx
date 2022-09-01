import React from 'react';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import styled from 'styled-components';

const BaseMenu = () => (
  <Menu
    //   theme={this.state.theme}
    //   onClick={}
    //   style={{ width: 256 }}
    defaultOpenKeys={['sub1']}
    selectedKeys={['1']}
    mode="inline">
    <SubMenu key="sub1" icon={<MailOutlined />} title="TEST JA">
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
      <Menu.Item key="4">Option 4</Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
  </Menu>
);

const CustomMobileNavbar: React.FC<MenuProps> = styled(BaseMenu)`
  /* TODO: override mobile nav */
  width: 10px;

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 0px;
  }
`;
const MobileNavbar = (): JSX.Element => {
  return <CustomMobileNavbar />;
};

export default MobileNavbar;
