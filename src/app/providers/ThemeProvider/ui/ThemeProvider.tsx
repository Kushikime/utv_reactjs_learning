import { FC, useMemo, useState } from 'react';
import { Theme, ThemeContext } from 'app/providers/ThemeProvider/index';
import { LOCAL_STORAGE_THEME_KEY } from '../model/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultValues = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={defaultValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
