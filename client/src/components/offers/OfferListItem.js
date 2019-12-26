import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const OfferListItem = ({ offer }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <div>
              <strong>{offer.positionTitle}</strong> for{" "}
              <strong>{offer.companyName}</strong>
              <div>
                <strong className="tag is-primary">{offer.experience}</strong>
              </div>
              <br />
              <div>
                <Link
                  to={`/profile/${offer.companyName}`}
                  className="button is-primary is-small"
                >
                  <strong>About Company</strong>
                </Link>
              </div>
              <br />
              <div>
                <strong>Miasto:</strong> {offer.city}
              </div>
              <div>
                <strong>Opis firmy</strong>
                <div>{offer.companyDescription}</div>
              </div>
              <div>
                <strong>Utworzono:</strong>{" "}
                <span>
                  {moment(offer.creationDate)
                    .locale("pl")
                    .startOf("day")
                    .fromNow()}
                </span>
              </div>
              <div>
                <strong>Strona firmy:</strong> <span>{offer.companyPage}</span>
              </div>
              <div>
                <strong>Opis projektu</strong>
              </div>
              <div>{offer.projectDescription}</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default OfferListItem;
