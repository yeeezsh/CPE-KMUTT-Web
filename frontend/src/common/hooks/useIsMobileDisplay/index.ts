import { useEffect, useState } from 'react';

import breakpoints from 'common/constants/breakpoints';

function isMobileDisplay(width: number) {
  console.log(width);
  if (width <= Number(breakpoints.IPAD_PORTRAIT.replace('px', ''))) return true;
  return false;
}

const useIsMobileDisplay = (): boolean => {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>();

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileDisplay(windowDimensions?.width || 0);
};

export default useIsMobileDisplay;
