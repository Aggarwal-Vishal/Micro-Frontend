const { useState } = require("react");

import React from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-blue-500 text-white p-4">
      <div>Counter:{count}</div>
      <button onClick={() => setCount(count + 1)}>Add One</button>
    </div>
  );
};

export default Counter;
