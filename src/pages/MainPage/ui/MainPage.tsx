import { FC } from 'react';
import { useTheme } from 'shared/hooks';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const { toggleTheme } = useTheme();
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
