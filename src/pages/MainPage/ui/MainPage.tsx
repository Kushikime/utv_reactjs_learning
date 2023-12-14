import { FC } from 'react';

interface MainPageProps {
  toggleTheme: () => void;
}

const MainPage: FC<MainPageProps> = ({ toggleTheme }) => {
  return (
    <div className="test">
      MAIN PAGE
      <div>
        <h1>TEST</h1>
        <button onClick={toggleTheme}>Switch theme!</button>
      </div>
    </div>
  );
};

export default MainPage;
