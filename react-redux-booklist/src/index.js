import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index.js";

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
