import React from 'react';
import Tab from '.';
import TabItem from './components/TabItem';

const Example = () => {
  return (
    <>
      <h2>Tab 컴포넌트 예시</h2>
      <Tab defaultIndex={1}>
        <TabItem title="tab1">
          <div>탭 1 내용입니다</div>
          <div>탭 1 내용입니다</div>
        </TabItem>
        <TabItem title="tab2">
          <div>탭 2 내용입니다</div>
        </TabItem>
      </Tab>
    </>
  );
};

export default Example;
