import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import Container from 'common/components/Container';
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
  StyledDivider,
  UL,
  Wrapper,
} from './styled';

export interface NavBarProps {
  visible?: boolean;
}

const Navbar: React.FC<NavBarProps> = (props) => {
  const [visible, setVisible] = useState(props.visible || false);

  const showDropdown = () => setVisible((value) => !value);

  return (
    <Container>
      <Nav>
        <UL>
          <NavbarBrand>
            <LogoKMUTT src="/assets/LOGO-KMUTT.svg" />
            <StyledDivider type="vertical" />
            <LogoCPE src="/assets/LOGO-CPE.svg" />
            <Wrapper>
              <Faculty>ภาควิชาวิศวกรรมคอมพิวเตอร์</Faculty>
              <Department>
                คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
              </Department>
            </Wrapper>
          </NavbarBrand>

          <MenuButton> {visible ? '​​' : 'EN'}</MenuButton>
          <Dropdown
            visible={visible}
            overlay={NavbarMenu}
            placement="bottomCenter"
            onVisibleChange={showDropdown}
            trigger={['click']}
            overlayStyle={{
              width: '100%',
              position: 'fixed',
              marginTop: '40px',
            }}>
            <MenuButton>{visible ? <CloseOutlined /> : <MenuOutlined />}</MenuButton>
          </Dropdown>
        </UL>
      </Nav>
    </Container>
  );
};

export default Navbar;
