import { useTheme } from 'shared/hooks';
import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/helpers';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About me</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage toggleTheme={toggleTheme} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
