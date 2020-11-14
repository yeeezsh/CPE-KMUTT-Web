import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import React, { useCallback, useState } from 'react';
import NavbarMenu from './NavbarMenu';
import {
  Department,
  Faculty,
  Logo,
  LogoCPE,
  LogoKMUTT,
  MenuButton,
  Nav,
  StyledDivider,
} from './styled';

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = useCallback(() => setVisible(!visible), [visible, setVisible]);

  return (
    <>
      <Nav>
        <Logo>
          <LogoKMUTT src="/LOGO-KMUTT.svg" />
          <StyledDivider type="vertical" />
          <LogoCPE src="/LOGO-CPE.svg" />
          <Faculty>
            ภาควิชาวิศวกรรมคอมพิวเตอร์
            <Department>
              คณะวิศวกรรมศาสตร์มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            </Department>
          </Faculty>
        </Logo>
        <MenuButton> {visible ? '​​  ' : 'EN'}</MenuButton>
        <Dropdown
          overlay={NavbarMenu}
          placement="bottomCenter"
          trigger={['click']}
          overlayStyle={{ width: '100%' }}>
          <MenuButton onClick={showDrawer}>
            {visible ? <CloseOutlined /> : <MenuOutlined />}
          </MenuButton>
        </Dropdown>
      </Nav>
    </>
  );
};

export default Navbar;
