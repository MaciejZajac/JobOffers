import React from "react";
import { useDispatch } from "react-redux";

const OfferList = () => {
  //   const dispatch = useDispatch();

  return (
    <div className="offer">
      <div className="offer-container">
        <ul className="offer__list">
          hello hello
          {/* {this.props.jobOffers &&
                this.props.jobOffers.map(item => {
                  return <OfferListItem key={item._id} item={item} />;
                })} */}
        </ul>
      </div>
    </div>
  );
};

export default OfferList;
