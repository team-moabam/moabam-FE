import React from 'react';
import { clsx } from 'clsx';
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
    container: 'relative flex-shrink-0',
    titleWrapper: clsx('flex flex-row gap-4 font-IMHyemin-bold text-xl', {
      'justify-start': align === 'start',
      'justify-center': align === 'center',
      'justify-end': align === 'end'
    }),
    title: (index: number) =>
      clsx('cursor-pointer pb-2 pt-1', {
        'text-black dark:text-white': index === currentTabIndex,
        'text-dark-gray': index !== currentTabIndex
      })
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
