import { FC } from 'react';

import { SearchOutlined } from '@ant-design/icons';

import { StyledInput } from './styled';
import { SearchBarProps } from './types';

const SearchBar: FC<SearchBarProps> = ({ ...props }) => {
  return <StyledInput {...props} allowClear prefix={<SearchOutlined />} />;
};

export default SearchBar;
