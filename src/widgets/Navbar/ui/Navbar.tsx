import { Link } from 'react-router-dom';
import { classNames } from 'shared/helpers';
import styles from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, [className])}>
      <div className={styles.logo}>
        Feature Sliced Design <br></br> Practice
      </div>
      <div className={styles.rightPart}>
        <ThemeSwitcher />
        <div className={styles.links}>
          <Link to="/">Main</Link>
          <Link to="/about">About me</Link>
        </div>
      </div>
    </div>
  );
};
