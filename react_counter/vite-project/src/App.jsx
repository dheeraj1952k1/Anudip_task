import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
