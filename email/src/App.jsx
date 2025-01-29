import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Count from "./Count.jsx";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: email</div>
    <Count />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
