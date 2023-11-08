import { useState, useEffect, useRef } from 'react';

const useTabBarStyle = (currentTabIndex: number) => {
  const titleRefs = useRef<null[] | HTMLDivElement[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tabBarWidth, setTabBarWidth] = useState(0);
  const [tabBarLeft, setTabBarLeft] = useState(0);

  useEffect(() => {
    const delay = 100;
    let timer: NodeJS.Timeout | number = 0;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, delay);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    setTabBarWidth(titleRefs.current[currentTabIndex]?.offsetWidth || 0);
    setTabBarLeft(titleRefs.current[currentTabIndex]?.offsetLeft || 0);
  }, [currentTabIndex, titleRefs, windowWidth]);

  return {
    titleRefs,
    tabBarLeft,
    tabBarWidth
  };
};

export default useTabBarStyle;
