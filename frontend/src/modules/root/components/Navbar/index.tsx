import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import React, { useState } from 'react';
import NavbarMenu from './components/NavbarMenu';
import {
  Department,
  Faculty,
  LogoCPE,
  LogoKMUTT,
  MenuButton,
  Nav,
  NavbarBrand,
  NavbarButtons,
  NavElements,
  Space,
  StyledDivider,
  Wrapper,
} from './styled';

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDropdown = () => setVisible((value) => !value);

  return (
    <Nav>
      <NavElements>
        <NavbarBrand>
          <LogoKMUTT src="/LOGO-KMUTT.svg" />
          <StyledDivider type="vertical" />
          <LogoCPE src="/LOGO-CPE.svg" />
          <Wrapper>
            <Faculty>ภาควิชาวิศวกรรมคอมพิวเตอร์</Faculty>
            <Department>
              คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            </Department>
          </Wrapper>
        </NavbarBrand>
        <Space />
        <NavbarButtons>
          <MenuButton> {visible ? '​​' : 'EN'}</MenuButton>
          <Dropdown
            overlay={NavbarMenu}
            placement="bottomCenter"
            onVisibleChange={showDropdown}
            trigger={['click']}
            overlayStyle={{
              width: '100%',
              position: 'fixed',
              padding: '0 14vw 0 14vw',
            }}>
            <MenuButton>{visible ? <CloseOutlined /> : <MenuOutlined />}</MenuButton>
          </Dropdown>
        </NavbarButtons>
      </NavElements>
    </Nav>
  );
};

export default Navbar;
