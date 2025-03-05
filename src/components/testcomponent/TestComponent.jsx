import { useState } from "react";

export const TestComponent = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    if (num != 0) setNum(num - 1);
  };
  return (
    <div className="container">
      <h1>Test Component</h1>
      <h3>{num}</h3>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </div>
  );
};
