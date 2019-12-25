import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AGetPrivateOffers } from "../../actions/offerActions";
import { SGetPrivateOffers } from "../../selectors";
import OfferList from "../offers/OfferList";

const Dashboard = () => {
  const dispatch = useDispatch();
  const offers = useSelector(SGetPrivateOffers);
  useEffect(() => {
    dispatch(AGetPrivateOffers());
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-three-quarters">
            <h1 className="title">Lista ofert</h1>
            <OfferList offers={offers} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
