import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <div className="h-[1000px]">About</div>
      },
      {
        path: 'tailwind',
        element: (
          <>
            <div>
              {/* 그냥 컬러 */}
              <p className="text-danger">red</p>
              <p className="text-success">green</p>
            </div>
            {/* 다크/라이트 모드를 조정하는 상위요소 class 를 통해 전환 */}
            <div className="dark bg-slate-600 font-IMHyemin-bold">
              {/* 다크모드 / 라이트 모드 */}
              <p className="text-light-gray dark:text-dark-gray">gray</p>
              <p className="text-light-main dark:text-dark-main">main</p>
              <p className="text-light-sub dark:text-dark-sub">sub</p>
              <p className="text-light-point dark:text-dark-point">point</p>
            </div>
            <div>
              {/* 사용하는 폰트 예시 */}
              <div className="font-IMHyemin-bold text-lg">IMHyemin-Bold</div>
              <div className="font-IMHyemin-regular text-lg">
                IMHymin-Regular
              </div>
            </div>
            <div className="font-IMHyemin-bold">
              {/* 사용하는 텍스트 크기 예시 */}
              <p className="text-xs">0.75rem</p>
              <p className="text-sm">0.875rem</p>
              <p className="text-base">1rem</p>
              <p className="text-xl">1.25rem</p>
              <p className="text-2xl">1.5rem</p>
            </div>
          </>
        )
      }
    ]
  }
]);

export default router;
