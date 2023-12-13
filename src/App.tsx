import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from './context/theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About me</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route
            path="/"
            element={<MainPageAsync toggleTheme={toggleTheme} />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
