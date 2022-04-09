import React from 'react';

import { FadeBlue, HeaderContainer, HeaderTeaxt } from 'common/components/Header/styled';

const Header: React.FC<{ title: string; backgroundImage: string }> = ({
  title,
  backgroundImage,
}) => {
  return (
    <HeaderContainer
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
      <FadeBlue />
      <HeaderTeaxt>{title}</HeaderTeaxt>
    </HeaderContainer>
  );
};

export default Header;
