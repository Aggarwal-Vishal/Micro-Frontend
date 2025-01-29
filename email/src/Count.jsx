import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Count;
