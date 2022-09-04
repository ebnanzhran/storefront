
import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { createRoot } from 'react-dom/client';
import App from "./App";

const rootEl = document.getElementById("root");
function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>

  )
}

const root = createRoot(rootEl);
root.render(<Main tab="home" />);