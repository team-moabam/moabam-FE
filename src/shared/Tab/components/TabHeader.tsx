import React from 'react';

interface TabHeaderProps {
  titles: string[];
  currentTabTitle: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabHeader = ({
  titles,
  currentTabTitle,
  setCurrentTab
}: TabHeaderProps) => {
  return (
    <div>
      {titles.map((title, index) => (
        <div onClick={() => setCurrentTab(index)}>
          {title === currentTabTitle ? <b>{title}</b> : <p>{title}</p>}
        </div>
      ))}
    </div>
  );
};

export default TabHeader;
