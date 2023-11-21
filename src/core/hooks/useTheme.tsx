import { useState, useCallback, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: (theme: Theme) => {},
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme: toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
