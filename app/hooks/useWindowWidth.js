import { useEffect, useState } from 'react';

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState({
    width: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowWidth({
        width: window.innerWidth,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
