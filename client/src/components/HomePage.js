import React from "react";
import OfferList from "./offers/OfferList";

const HomePage = () => {
  return (
    <div className="body">
      <div className="body-container">
        <div className="body__offers">
          <OfferList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
