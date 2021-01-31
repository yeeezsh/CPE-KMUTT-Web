import React, { useEffect, useState } from 'react';
import { Btn } from './styled';
import { ButtonProps } from './types';
import COLORS from 'common/constants/colors';

// Example components
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [fontColor, setFontColor] = useState('');

  useEffect(() => {
    switch (props.color) {
      case 'primary':
        setBackgroundColor(COLORS.PRIMARY_COLOR);
        setBorderColor('#ffffff');
        setFontColor('#ffffff');
        break;
      case 'yellow':
        setBackgroundColor(COLORS.YELLOW_1);
        setBorderColor(COLORS.YELLOW_1);
        setFontColor('#ffffff');
        break;
      case 'white':
        setBackgroundColor('#ffffff');
        setBorderColor('#ffffff');
        setFontColor(COLORS.PRIMARY_COLOR);
        break;
      case 'borderless':
        setBackgroundColor('transparent');
        setBorderColor('transparent');
        setFontColor(COLORS.PRIMARY_COLOR);
        break;
      case 'transparent':
        setBackgroundColor('transparent');
        setBorderColor(COLORS.PRIMARY_COLOR);
        setFontColor(COLORS.PRIMARY_COLOR);
        break;

      default:
        setBackgroundColor(COLORS.PRIMARY_COLOR);
        setBorderColor(COLORS.PRIMARY_COLOR);
        setFontColor('#ffffff');
        break;
    }
  }, [props.color]);

  return (
    <Btn
      style={{ background: backgroundColor, borderColor: borderColor, color: fontColor }}
      {...props}>
      {children}
    </Btn>
  );
};

export default Button;
