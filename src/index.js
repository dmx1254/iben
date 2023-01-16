import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

import { store, persistor } from "./app/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
