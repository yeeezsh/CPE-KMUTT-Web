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
  NavbarBand,
  StyledDivider,
  UL,
} from './styled';

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDropdown = () => setVisible((value) => !value);

  return (
    <>
      <Nav>
        <UL>
          <NavbarBand>
            <LogoKMUTT src="/LOGO-KMUTT.svg" />
            <StyledDivider type="vertical" />
            <LogoCPE src="/LOGO-CPE.svg" />
            <Faculty>
              ภาควิชาวิศวกรรมคอมพิวเตอร์
              <Department>
                คณะวิศวกรรมศาสตร์มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
              </Department>
            </Faculty>
          </NavbarBand>

          <MenuButton> {visible ? '​​' : 'EN'}</MenuButton>
          <Dropdown
            overlay={NavbarMenu}
            placement="bottomCenter"
            onVisibleChange={showDropdown}
            trigger={['click']}
            overlayStyle={{ width: '100%', borderTop: '1px solid #eaeaea' }}>
            <MenuButton>{visible ? <CloseOutlined /> : <MenuOutlined />}</MenuButton>
          </Dropdown>
        </UL>
      </Nav>
    </>
  );
};

export default Navbar;
