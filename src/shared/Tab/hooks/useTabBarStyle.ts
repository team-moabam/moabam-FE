import { useState, useEffect, useRef } from 'react';

const useTabBarStyle = (currentTabIndex: number) => {
  const titleRefs = useRef<null[] | HTMLDivElement[]>([]);
  const [tabBarWidth, setTabBarWidth] = useState(0);
  const [tabBarLeft, setTabBarLeft] = useState(0);

  useEffect(() => {
    setTabBarWidth(() => titleRefs.current[currentTabIndex]?.offsetWidth || 0);
    setTabBarLeft(
      () =>
        titleRefs.current[currentTabIndex]?.getBoundingClientRect().left || 0
    );
  }, [currentTabIndex, titleRefs]);

  return {
    titleRefs,
    tabBarLeft,
    tabBarWidth
  };
};

export default useTabBarStyle;
