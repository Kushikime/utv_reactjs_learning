import { PropsWithChildren, createContext } from 'react';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({});
const LOCAL_STORAGE_THEME_KEY = 'LOCAL_STORAGE_THEME_KEY';

export { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY };
