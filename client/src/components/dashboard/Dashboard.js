import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AGetPrivateOffers } from "../../actions/offerActions";
import { SGetPrivateOffers, SIsAuthLoading, SIsLoading } from "../../selectors";
import OfferList from "../offers/OfferList";

const Dashboard = () => {
  const dispatch = useDispatch();
  const offers = useSelector(SGetPrivateOffers);
  const isLoading = useSelector(SIsLoading);
  useEffect(() => {
    dispatch(AGetPrivateOffers());
  }, []);

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <aside class="menu">
              <p class="menu-label">Panel</p>
              <ul class="menu-list">
                <li>
                  <Link to="/dashboard">Dashboad</Link>
                </li>
                <li>
                  <Link to="/new-offer">Dodaj ofertę</Link>
                </li>
              </ul>
            </aside>
          </div>
          <div className="column">
            <section className="section">
              <h1 className="title">Lista ofert</h1>
              <OfferList offers={offers} isLoading={isLoading} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
