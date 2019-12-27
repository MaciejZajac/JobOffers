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
              alt="logo"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <div className="level">
              <div className="level-left">
                <div>
                  <strong>{offer.positionTitle}</strong> for{" "}
                  <strong>{offer.companyName}</strong>
                </div>
              </div>
              <div className="level-right">
                <div>
                  <span className="tag is-warning">
                    {moment(offer.creationDate)
                      .startOf("day")
                      .fromNow()}
                  </span>
                </div>
              </div>
            </div>
            <div className="level">
              <div className="level-left">
                <div>
                  <strong>Strona firmy:</strong> {offer.companyPage}
                  <div>
                    <strong>Miasto:</strong> {offer.city}
                  </div>
                </div>
              </div>
              <div className="level-right">
                <div>
                  <div>
                    <strong className="tag is-primary">
                      {offer.experience}
                    </strong>
                  </div>
                  <br />
                  <Link
                    to={`/profile/${offer.companyName}`}
                    className="button is-primary is-small"
                  >
                    <strong>About Company</strong>
                  </Link>
                </div>
              </div>
            </div>

            <div className="level">
              <div className="level-left">
                <div>
                  <strong>Opis firmy</strong>
                  <div>{offer.companyDescription}</div>
                  <br />
                  <strong>Opis projektu</strong>
                  <div>{offer.projectDescription}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default OfferListItem;
