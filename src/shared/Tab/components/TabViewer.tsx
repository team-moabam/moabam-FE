import React from 'react';

interface TabViewerProps {
  currentTab: React.ReactElement;
}

const TabViewer = ({ currentTab }: TabViewerProps) => {
  return <div className="h-full">{currentTab}</div>;
};

export default TabViewer;
