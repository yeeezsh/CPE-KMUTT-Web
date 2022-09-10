import { useState } from 'react';

import { useDropdownType } from './types';

export default function useDropdown(): useDropdownType {
  const [visible, setVisible] = useState(false);

  const showDropdown = () => {
    setVisible(!visible);
  };

  return { visible, showDropdown };
}
