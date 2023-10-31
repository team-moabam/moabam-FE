import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    /* TODO: 가장 상위 div 에서 다크모드 부여해야 함 */
    <div className="absolute inset-x-0 m-auto flex h-screen w-full max-w-md flex-col">
      <div className="h-full overflow-auto bg-light-main text-black dark:bg-dark-main dark:text-white">
        <Outlet />
      </div>

      {/* TODO: 임시 네브바, 공통 컴포넌트로 교체해야 함 */}
      <div className="flex h-16 justify-between bg-slate-300 p-2 text-2xl">
        <h1>Hello</h1>
        <Link to="about">about</Link>
        <Link to="tailwind">Tailwind</Link>
      </div>
    </div>
  );
};

export default App;
