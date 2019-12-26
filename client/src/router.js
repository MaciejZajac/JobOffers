import React from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Navbar from "./components/header/Navbar";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { ALoginSession } from "./actions/authActions";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/company/Profile";

const Router = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    dispatch(ALoginSession(user));
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile/:profileName" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/new-offer" component={NewJobOffer} /> */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
export default Router;
