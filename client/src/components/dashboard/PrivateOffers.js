import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AGetPrivateOffers } from "../../actions/offerActions";
import { SGetPrivateOffers, SIsAuthLoading, SIsLoading } from "../../selectors";
import OfferList from "../offers/OfferList";

const PrivateOffers = () => {
  const dispatch = useDispatch();
  const offers = useSelector(SGetPrivateOffers);
  const isLoading = useSelector(SIsLoading);
  useEffect(() => {
    dispatch(AGetPrivateOffers());
  }, [dispatch]);

  return (
    <section className="section">
      <h1 className="title">Lista ofert</h1>
      <OfferList offers={offers} isLoading={isLoading} />
    </section>
  );
};

export default PrivateOffers;
