import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber+1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber-1);
  }

  return (
    <div>
      <h3>{number}</h3>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;