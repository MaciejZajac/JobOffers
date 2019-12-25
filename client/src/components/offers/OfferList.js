import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AGetOffers } from "../../actions/offerActions";
import { SGetOffers } from "../../selectors";

const OfferList = () => {
  const dispatch = useDispatch();
  const offers = useSelector(SGetOffers);
  useEffect(() => {
    dispatch(AGetOffers());
  }, []);

  return (
    <div>
      <div>
        <div>
          <ul>
            {offers &&
              offers.map((offer, index) => {
                return (
                  <li key={index}>
                    Pozycja: {offer.positionTitle}. <br /> Miasto: {offer.city}{" "}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferList;