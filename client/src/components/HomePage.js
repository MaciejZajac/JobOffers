import React, { useEffect } from "react";
import OfferList from "./offers/OfferList";
import { useDispatch, useSelector } from "react-redux";
import { AGetOffers } from "../actions/offerActions";
import { SGetOffers } from "../selectors";

const HomePage = () => {
  const dispatch = useDispatch();
  const offers = useSelector(SGetOffers);
  useEffect(() => {
    dispatch(AGetOffers());
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-mobile is-centered">
          <div className="column is-three-quarters">
            <h1 className="title">Lista ofert</h1>
            <OfferList offers={offers} />
          </div>
        </div>
      </div>
    </section>
    // <div className="body">
    //   <div className="body-container">
    //     <div className="body__offers">
    //     </div>
    //   </div>
    // </div>
  );
};

export default HomePage;
