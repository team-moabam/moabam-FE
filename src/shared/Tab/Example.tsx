import Tab, { TabItem } from './Tab';

const Example = () => {
  return (
    <>
      <h2>Tab 컴포넌트 예시</h2>
      <Tab
        defaultIndex={2}
        align="center"
      >
        <TabItem title="탭 제목 첫번째">
          <div>탭 1 내용입니다</div>
          <div>탭 1 내용입니다</div>
        </TabItem>
        <TabItem title="tab2">
          <div>탭 2 내용입니다</div>
        </TabItem>
        <TabItem title="tab 3">
          <div>탭 3 내용입니다</div>
        </TabItem>
      </Tab>
    </>
  );
};

export default Example;
