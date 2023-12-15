import { useTheme } from 'shared/hooks';
import styles from './ThemeSwticher.module.scss';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.themeSwitcher}>
      <input
        checked={theme === Theme.DARK}
        type="checkbox"
        id="toggle"
        className={styles.checkbox}
      />
      <label htmlFor="toggle" className={styles.label} onClick={toggleTheme}>
        <span className={styles.labelBg}></span>
      </label>
      <div className={styles.bg}></div>
    </div>
  );
};
