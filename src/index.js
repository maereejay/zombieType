import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { LevelProvider } from "./context/LevelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LevelProvider>
      <App />
    </LevelProvider>
  </React.StrictMode>
);
