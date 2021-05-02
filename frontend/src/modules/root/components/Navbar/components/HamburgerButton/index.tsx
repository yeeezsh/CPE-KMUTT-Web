import React from 'react';

import { Cancel, Hamburger, StyledMenuButton } from './styled';
import { HamburgerButtonProps } from './types';

const HamburgerButton = ({ visible, onClick }: HamburgerButtonProps) => {
  return (
    <StyledMenuButton onClick={onClick}>
      {visible ? (
        <Cancel viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1.58278L12.59 0.167297L7 5.77905L1.41 0.167297L0 1.58278L5.59 7.19454L0 12.8063L1.41 14.2218L7 8.61002L12.59 14.2218L14 12.8063L8.41 7.19454L14 1.58278Z" />
        </Cancel>
      ) : (
        <Hamburger viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" />
        </Hamburger>
      )}
    </StyledMenuButton>
  );
};

export default HamburgerButton;
