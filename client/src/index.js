import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import { BrowserRouter, useHistory } from "react-router-dom";
import "bulma/css/bulma.css";
import "./styles/main.scss";

import { Provider } from "react-redux";
import configureStore from "./store";

const ConStore = ({ children }) => {
  const history = useHistory();
  const store = configureStore({ history });

  return <Provider store={store}>{children}</Provider>;
};

ReactDOM.render(
  <BrowserRouter>
    <ConStore>
      <Router />
    </ConStore>
  </BrowserRouter>,
  document.getElementById("root")
);
