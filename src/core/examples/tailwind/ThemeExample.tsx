interface ThemeProps {
  theme?: 'dark' | 'light';
}

const ThemeExample = ({ theme = 'light' }: ThemeProps) => {
  return (
    <div className={`${theme} font-IMHyemin-bold`}>
      <div className="h-screen bg-light-main  p-2 dark:bg-dark-main">
        <div className="p-2 text-2xl text-black dark:text-white">
          {theme === 'dark' ? '다크모드' : '라이트 모드'}
        </div>
        <div className="rounded-2xl bg-light-point p-2 text-center text-lg dark:bg-dark-point">
          <p className="text-light-gray dark:text-dark-gray">gray</p>
          <p className="text-light-main dark:text-dark-main">main</p>
          <p className="text-light-sub dark:text-dark-sub">sub</p>
        </div>
      </div>
    </div>
  );
};

export default ThemeExample;
