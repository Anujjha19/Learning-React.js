//Increment /decrement button

import React, { useState } from "react";

const IncrementDecrementButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div>
      <button
        onClick={handleDecrement}
        style={{ color: count === 0 ? "red" : "black" }}
      >
        -
      </button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default IncrementDecrementButton;
