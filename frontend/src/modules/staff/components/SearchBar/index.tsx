import { FC } from 'react';

import { GrSearch } from 'react-icons/gr';

import { StyledInput } from './styled';
import { SearchBarProps } from './types';

const SearchBar: FC<SearchBarProps> = ({ ...props }) => {
  return <StyledInput {...props} allowClear prefix={<GrSearch />} />;
};

export default SearchBar;
