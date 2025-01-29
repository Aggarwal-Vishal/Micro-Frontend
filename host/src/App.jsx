import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Counter from "../../chat/src/Counter";
import Count from "../../email/src/Count";
import counterWrapper from "../../chat/src/counterWrapper";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    counterWrapper(divRef.current);
  }, []);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <div ref={divRef}></div>
      {/* <Counter />
      <Count /> */}
    </div>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
