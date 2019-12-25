import React from "react";
import OfferListItem from "./OfferListItem";

const OfferList = ({ offers }) => {
  return (
    <>
      {offers ? (
        offers.map((offer, index) => <OfferListItem key={index} />)
      ) : (
        <div>Nie ma ofert!</div>
      )}
    </>
  );
};

export default OfferList;
