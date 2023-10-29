import React, { useEffect, useRef, useState } from 'react';
import TabBar from './TabBar';

interface TabHeaderProps {
  titles: string[];
  currentTabIndex: number;
  setCurrentTabIndex: React.Dispatch<React.SetStateAction<number>>;
  align: 'start' | 'center' | 'end';
}

const TabHeader = ({
  titles,
  currentTabIndex,
  setCurrentTabIndex,
  align
}: TabHeaderProps) => {
  const headerJustify = `justify-${align}`;
  const currentTitleColor = 'text-black dark:text-white';
  const titleColor = 'text-dark-gray';

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

  return (
    <div className="relative">
      <div
        className={`flex flex-row gap-4 ${headerJustify} font-IMHyemin-bold`}
      >
        {titles.map((title, index) => (
          <div
            key={title}
            ref={(element) => {
              titleRefs.current[index] = element;
            }}
            className={`${
              index === currentTabIndex ? currentTitleColor : titleColor
            } pb-2 pt-1 text-xl`}
            onClick={() => setCurrentTabIndex(index)}
          >
            {title}
          </div>
        ))}
      </div>
      <TabBar
        width={tabBarWidth}
        left={tabBarLeft}
      />
    </div>
  );
};

export default TabHeader;
