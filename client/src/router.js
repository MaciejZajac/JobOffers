import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Navbar from "./components/header/Navbar";
import Register from "./components/register/Register";

const Router = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
export default Router;
