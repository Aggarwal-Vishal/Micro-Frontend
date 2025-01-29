import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { Counter } from "./Counter";

export default (el) => {
  const root = ReactDOM.createRoot(el);
  root.render(<Counter />);
};
