import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import NewJobOffer from "./NewJobOffer";
import PrivateOffers from "./PrivateOffers";
import CompanyProfile from "./CompanyProfile";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="columns ">
          <div className="column is-one-fifth">
            <aside className="menu">
              <p className="menu-label">Dashboard</p>
              <ul className="menu-list">
                <li>
                  <Link to="/dashboard/offers">Moje oferty</Link>
                </li>
                <li>
                  <Link to="/dashboard/newOffer">Nowa oferta</Link>
                </li>
                <li>
                  <Link to="/dashboard/companyProfile">Profil firmy</Link>
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
              <Route exact path="/dashboard/newOffer" component={NewJobOffer} />
              <Route
                exact
                path="/dashboard/companyProfile"
                component={CompanyProfile}
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
