import React from 'react';
import Tab from '.';
import TabItem from './components/TabItem';

const Example = () => {
  return (
    <>
      <h2>Tab 컴포넌트 예시</h2>
      <Tab>
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

// Tab 에서 해야하는 일
// TabItem 을 하나씩 받아서
// title 과 children prop 을 뽑기
// title 은 TabHeader 에 박기?

export default Example;
