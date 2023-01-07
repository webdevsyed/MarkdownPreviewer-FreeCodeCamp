import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <h1 className="main-heading">MarkDown Previewer</h1>
    <App />
  </>
);
