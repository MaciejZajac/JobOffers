import React from "react";
import OfferListItem from "./OfferListItem";

const OfferList = ({ offers, isLoading }) => {
  if (isLoading) {
    return <progress className="progress is-small is-primary" max="100" />;
  }
  return (
    <>
      {offers ? (
        offers.map((offer, index) => (
          <OfferListItem key={index} offer={offer} />
        ))
      ) : (
        <div>Nie ma ofert!</div>
      )}
    </>
  );
};

export default OfferList;
