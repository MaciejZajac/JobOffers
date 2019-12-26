import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import NewJobOffer from "./NewJobOffer";
import PrivateOffers from "./PrivateOffers";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <aside class="menu">
              <p class="menu-label">Dashboard</p>
              <ul class="menu-list">
                <li>
                  <Link to="/dashboard/offers">Moje oferty</Link>
                </li>
                <li>
                  <Link to="/dashboard/new-offer">Nowa oferta</Link>
                </li>
              </ul>
            </aside>
          </div>
          <div
            className="column"
            style={{ maxHeight: "90vh", overflowY: "scroll" }}
          >
            <Switch>
              <Route exact path="/dashboard/offers" component={PrivateOffers} />
              <Route
                exact
                path="/dashboard/new-offer"
                component={NewJobOffer}
              />
              <Route component={PrivateOffers} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
