import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import NewJobOffer from "./NewJobOffer";

const Dashboard = () => {
  return (
    <div>
      <Link to="/new-offer" className="nav__link">
        New job offer
      </Link>
      Dashboard!
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
