import { FunnelHook } from '@/shared/Funnel/hooks/useFunnel';

const Navbar = ({ hasNext, hasPrev, toNext, toPrev }: FunnelHook) => {
  return (
    <nav className="grid h-16 grid-cols-2 text-2xl">
      <button
        className="col-start-1 rounded-es-xl bg-white text-dark-gray transition-all hover:bg-slate-100"
        onClick={toPrev}
      >
        이전
      </button>
      <button
        className="col-start-2 rounded-ee-xl bg-light-point text-white transition-all hover:bg-light-point-hover"
        onClick={toNext}
      >
        다음
      </button>
    </nav>
  );
};

export default Navbar;
