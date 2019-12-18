import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import { Provider } from "react-redux";
import store from "./store";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
