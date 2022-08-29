import { useEffect, useState } from 'react';

import breakpoints from 'common/constants/breakpoints';

function isMobileDisplay(width: number) {
  if (width <= Number(breakpoints.IPAD_PORTRAIT.replace('px', ''))) return true;
  return false;
}

const useIsMobileDisplay = (): boolean => {
  function getWindowDimensions() {
    if (typeof window !== 'undefined') {
      //SSR problem
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    }
    return {
      width: 0,
      height: 0,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileDisplay(windowDimensions?.width || 0);
};

export default useIsMobileDisplay;
