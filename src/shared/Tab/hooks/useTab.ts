import React, { useEffect } from 'react';
import { useState } from 'react';
import { childrenToArray } from '../utils/childrenToArray';
import TabItem, { TabItemProps } from '../components/TabItem';
import TabThumnail, { TabThumbnailProps } from '../components/TabThumbnail';

interface useTabProps {
  tabChildren: React.ReactNode;
  defaultIndex: number;
  onChange?: VoidFunction;
}

const useTab = ({ tabChildren, defaultIndex, onChange }: useTabProps) => {
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

  useEffect(() => {
    const onSelect = tabItems[currentTabIndex].props.onSelect;
    onSelect && onSelect();
    onChange && onChange();
  }, [currentTabIndex, onChange, tabItems]);

  return {
    titleOfTabItems,
    currentTabIndex,
    setCurrentTabIndex,
    currentTab: tabItems[currentTabIndex],
    currentThumnail: tabThumnails[currentTabIndex]
  };
};

export default useTab;
