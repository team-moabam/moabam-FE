import Header from './components/Header';

const Example = () => {
  return (
    <div className="h-screen w-screen border bg-yellow-100">
      <Header
        prev="/"
        title="예시 페이지"
        className="bg-transparent"
      ></Header>
      <div className="h-[1000px]">엄청나게 긴거</div>
    </div>
  );
};

export default Example;
