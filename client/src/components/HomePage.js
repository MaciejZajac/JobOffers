import React from "react";
import OfferList from "./offers/OfferList";

const HomePage = () => {
  return (
    <>
      <section class="section">
        <div class="container">
          <h1 class="title">Lista ofert</h1>
          <OfferList />
        </div>
      </section>
    </>
    // <div className="body">
    //   <div className="body-container">
    //     <div className="body__offers">
    //     </div>
    //   </div>
    // </div>
  );
};

export default HomePage;
