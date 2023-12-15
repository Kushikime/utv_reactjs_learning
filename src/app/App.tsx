import { useTheme } from 'shared/hooks';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/helpers';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
