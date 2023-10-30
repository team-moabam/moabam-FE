import React from 'react';
import { TabBar } from '.';
import { useTabBarStyle } from '../hooks';

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
  const { titleRefs, tabBarLeft, tabBarWidth } =
    useTabBarStyle(currentTabIndex);

  const tabHeaderStyle = {
    container: 'relative',
    titleWrapper: `flex flex-row gap-4 font-IMHyemin-bold text-xl justify-${align}`,
    title: (index: number) =>
      `${
        index === currentTabIndex
          ? 'text-black dark:text-white'
          : 'text-dark-gray'
      } pb-2 pt-1 cursor-pointer`
  };

  return (
    <div className={tabHeaderStyle.container}>
      <div className={tabHeaderStyle.titleWrapper}>
        {titles.map((title, index) => (
          <div
            key={title}
            ref={(element) => {
              titleRefs.current[index] = element;
            }}
            className={tabHeaderStyle.title(index)}
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
