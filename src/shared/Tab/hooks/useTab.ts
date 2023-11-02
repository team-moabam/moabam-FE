import React from 'react';
import { useState } from 'react';
import { childrenToArray } from '../utils/childrenToArray';
import TabItem, { TabItemProps } from '../components/TabItem';
import TabThumnail, { TabThumbnailProps } from '../components/TabThumbnail';

interface useTabProps {
  tabChildren: React.ReactNode;
  defaultIndex: number;
}

const useTab = ({ tabChildren, defaultIndex }: useTabProps) => {
  const tabItems = childrenToArray<TabItemProps>(tabChildren, TabItem);
  const tabThumnails = childrenToArray<TabThumbnailProps>(
    tabChildren,
    TabThumnail
  );
  const titleOfTabItems = tabItems.map((tabItem) => tabItem.props.title);

  if (defaultIndex >= tabItems.length) {
    throw new Error('wrong initial index');
  }

  const [currentTabIndex, setCurrentTabIndex] = useState(defaultIndex);

  return {
    titleOfTabItems,
    currentTabIndex,
    setCurrentTabIndex,
    currentTab: tabItems[currentTabIndex],
    currentThumnail: tabThumnails[currentTabIndex]
  };
};

export default useTab;
