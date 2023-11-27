import { Header } from '@/shared/Header';

const RankPage = () => {
  return (
    <div className="flex h-full w-full max-w-md flex-col">
      <div>
        <Header
          prev="myPage"
          className="bg-light-sub dark:bg-dark-sub"
          title="랭킹"
        />
        <div className="flex items-end bg-light-sub p-5 shadow-md dark:bg-dark-sub">
          <div className="flex h-full flex-1 flex-col justify-end ">
            <div className="grid place-items-center">
              <div className="relative mb-5  h-16 w-16">
                <img
                  src="https://thumbnail.10x10.co.kr/webimage/image/basic600/515/B005159997.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
                  alt=""
                  className="absolute rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 z-10 grid h-6 w-6 place-content-center rounded-full bg-light-gray font-extrabold text-light-sub">
                  <h1>2</h1>
                </div>
              </div>
              <div className="text-sm">볼록눈이</div>
              <div className="mt-2 font-extrabold text-light-point dark:text-dark-point">
                Lv 137
              </div>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col justify-end pt-5 ">
            <div className="grid place-items-center">
              <div className="relative mb-5  h-24 w-24">
                <img
                  src="https://thumbnail.10x10.co.kr/webimage/image/basic600/515/B005159997.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
                  alt=""
                  className="absolute rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 z-10 grid h-6 w-6 place-content-center rounded-full bg-warning font-extrabold text-light-sub">
                  <h1>1</h1>
                </div>
              </div>
              <div className="text-sm">볼록눈이</div>
              <div className="mt-2 font-extrabold text-light-point dark:text-dark-point">
                Lv 137
              </div>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col justify-end ">
            <div className="grid place-items-center">
              <div className="relative mb-5  h-16 w-16">
                <img
                  src="https://thumbnail.10x10.co.kr/webimage/image/basic600/515/B005159997.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
                  alt=""
                  className="absolute rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 z-10 grid h-6 w-6 place-content-center rounded-full bg-bronze font-extrabold text-light-sub">
                  <h1>3</h1>
                </div>
              </div>
              <div className="text-sm">볼록눈이</div>
              <div className="mt-2 font-extrabold text-light-point dark:text-dark-point">
                Lv 137
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 h-full overflow-auto bg-light-main text-black dark:bg-dark-main dark:text-white">
        {/* 1~10등 */}
        <ul>
          <li className="flex h-16 items-center p-3">
            <div className="w-10  text-center text-xl">1</div>
            <div className="mx-2 h-11 w-11 rounded-full bg-slate-600"></div>
            <div className="flex-1">볼록눈이</div>
            <div>Lv 890</div>
          </li>
          <li className="flex h-16 items-center p-3">
            <div className="w-10  text-center text-xl">2</div>
            <div className="mx-2 h-11 w-11 rounded-full bg-slate-600"></div>
            <div className="flex-1">감자칩</div>
            <div>Lv 870</div>
          </li>
        </ul>
      </div>
      {/* 나 */}
      <div className="flex h-16 items-center bg-light-sub p-3 dark:bg-dark-sub">
        <div className="w-10  text-center text-xl">2</div>
        <div className="mx-2 h-11 w-11 rounded-full bg-slate-600"></div>
        <div className="flex-1">감자칩</div>
        <div>Lv 870</div>
      </div>
    </div>
  );
};

export default RankPage;
