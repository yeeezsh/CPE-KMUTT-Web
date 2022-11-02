import { FC } from 'react';

import { HeaderWithDivider, StyledDivider } from 'common/components/Divider/styled';
import stylizeProps from 'common/utils/stylizeProps';

import { DividerProps } from './types';

const Divider: FC<DividerProps> = ({
  borderColor,
  marginTop,
  marginBottom,
  ...props
}) => {
  return (
    <>
      {props.header && <HeaderWithDivider>{props.header}</HeaderWithDivider>}
      <StyledDivider
        {...stylizeProps({
          borderColor,
          marginTop,
          marginBottom,
        })}
        {...props}
      />
    </>
  );
};

export default Divider;
