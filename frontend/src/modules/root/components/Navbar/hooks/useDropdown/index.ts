import { useState } from 'react';

export default function useDropdown() {
  const [visible, setVisible] = useState(false);

  const showDropdown = () => {
    setVisible(!visible);
  };

  return { visible, showDropdown };
}
