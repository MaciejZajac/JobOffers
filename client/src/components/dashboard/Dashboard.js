import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AGetPrivateOffers } from "../../actions/offerActions";
import { SGetPrivateOffers } from "../../selectors";

const Dashboard = () => {
  const dispatch = useDispatch();
  const offers = useSelector(SGetPrivateOffers);
  useEffect(() => {
    dispatch(AGetPrivateOffers());
  }, []);

  return (
    <div>
      <Link to="/new-offer" className="nav__link">
        New job offer
      </Link>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          {offers &&
            offers.map((offer, index) => {
              return (
                <li key={index}>
                  {" "}
                  Pozycja: {offer.positionTitle}. <br /> Miasto: {offer.city}{" "}
                </li>
              );
            })}
        </ul>
      </div>
      Dashboard!
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
