import { useState } from 'react';
import './Counter.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onIncrementHandle = () => {
    setCounter((prev) => prev + 1);
  };
  const onDecrementHandle = () => {
    setCounter((prev) => prev - 1);
  };
  const onResetHandle = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onIncrementHandle}>+</button>
      <button onClick={onResetHandle}>reset</button>
      <button onClick={onDecrementHandle}>-</button>
    </div>
  );
};
