import React, { useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { SIsLoading } from "../../selectors";

const OfferListItem = ({ offer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = useSelector(SIsLoading);
  const handleSubmit = app => {
    // dispatch(ANewOffer(offer));
    console.log("app", app);
  };

  return (
    // <div className="box">
    <div className="card margin-bottom-10" key={isOpen}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-60x60">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-4">{offer.positionTitle}</p>
            <p className="subtitle is-6">
              <Link to={`/profile/${offer.companyName}`}>
                @{offer.companyName}
              </Link>
              <br />
              4000 - 5000 zł, kraków
            </p>
          </div>
          <div className="is-pulled-right tag is-warning">
            {moment(offer.creationDate)
              .startOf("day")
              .fromNow()}
          </div>
        </div>

        <div className="content">
          <p>
            <strong>Opis projektu</strong>
            <br />
            {/* {offer.projectDescription} */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </p>
        </div>

        {isOpen && (
          <>
            <div className="content">
              <p>
                <strong>Opis firmy</strong>
                <br />
                {/* {offer.projectDescription} */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </p>
            </div>
            <div>
              <Form
                validate={values => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "Required";
                  }
                  if (!values.email) {
                    errors.email = "Required";
                  }

                  return errors;
                }}
                onSubmit={handleSubmit}
                render={({ handleSubmit }) => (
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="columns">
                      <div className="column">
                        <Field name="name">
                          {({ input, meta }) => (
                            <div className="field">
                              <div className="control">
                                <input
                                  {...input}
                                  type="text"
                                  placeholder="Imię i nazwisko"
                                  className={`input  ${meta.error &&
                                    meta.touched &&
                                    "is-danger"} ${!meta.error &&
                                    " is-primary "}`}
                                />
                              </div>
                            </div>
                          )}
                        </Field>
                        <Field name="email">
                          {({ input, meta }) => (
                            <div className="field">
                              <div className="control">
                                <input
                                  {...input}
                                  type="email"
                                  placeholder="Email"
                                  className={`input  ${meta.error &&
                                    meta.touched &&
                                    "is-danger"} ${!meta.error &&
                                    " is-primary "}`}
                                />
                              </div>
                            </div>
                          )}
                        </Field>

                        <div className="control">
                          <button
                            className={`button is-primary ${isLoading &&
                              "is-loading"}`}
                            type="submit"
                          >
                            Wyślij CV
                          </button>
                        </div>
                      </div>
                      <div className="column">
                        <Field name="file">
                          {({ input, meta }) => (
                            <div className="field">
                              <div className="file has-name is-boxed">
                                <label className="file-label">
                                  <input
                                    {...input}
                                    className="file-input"
                                    type="file"
                                    name="resume"
                                  />
                                  <span className="file-cta">
                                    <span className="file-icon">
                                      <i className="fas fa-upload" />
                                    </span>
                                    <span className="file-label">
                                      Choose a file…
                                    </span>
                                  </span>
                                  <span className="file-name">
                                    {input.value}
                                  </span>
                                </label>
                              </div>
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                  </form>
                )}
              />
            </div>
          </>
        )}
      </div>
      <button
        type="button"
        className="button__extend"
        aria-label="more options"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="icon">
          <i className={`fas  ${isOpen ? "fa-angle-up" : "fa-angle-down"}`} />
        </span>
      </button>
      {/* </div> */}
      {/* <article className="media">
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
      </article> */}
    </div>
  );
};

export default OfferListItem;
