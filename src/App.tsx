import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="absolute inset-x-0 m-auto flex h-screen w-full max-w-md flex-col border bg-slate-100">
      <div className="h-full overflow-auto">
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
