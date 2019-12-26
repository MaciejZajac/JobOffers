import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { SIsLoading } from "../../selectors";
import { ACompanyProfile } from "../../actions/offerActions";

const CompanyProfile = () => {
  const isLoading = useSelector(SIsLoading);
  const dispatch = useDispatch(ACompanyProfile);

  const handleSubmit = values => {
    dispatch(ACompanyProfile(values));
  };
  return (
    <div className="container">
      <div className="columns ">
        <div className="column is-half">
          <Form
            onSubmit={handleSubmit}
            validate={values => {
              const errors = {};
              if (!values.companyName) {
                errors.companyName = "Required";
              }
              if (!values.companyHistory) {
                errors.companyHistory = "Required";
              }
              if (!values.linkedInURL) {
                errors.linkedInURL = "Required";
              }
              if (!values.companyWebsite) {
                errors.companyWebsite = "Required";
              }

              return errors;
            }}
            render={({ handleSubmit }) => {
              return (
                <form className="form" onSubmit={handleSubmit}>
                  <Field name="companyName">
                    {({ input, meta }) => (
                      <div className="field">
                        <label className="label">Company Name</label>
                        <input
                          {...input}
                          type="text"
                          placeholder="Company Name"
                          className={`input ${meta.error &&
                            meta.touched &&
                            "is-danger"} ${!meta.error && " is-primary "}`}
                        />
                      </div>
                    )}
                  </Field>

                  <Field name="companyHistory">
                    {({ input, meta }) => (
                      <div className="field">
                        <label className="label">Company history</label>
                        <textarea
                          {...input}
                          type="text"
                          placeholder="Company history"
                          className={`textarea ${meta.error &&
                            meta.touched &&
                            "is-danger"} ${!meta.error && " is-primary "}`}
                        />
                      </div>
                    )}
                  </Field>
                  <Field name="linkedInURL">
                    {({ input, meta }) => (
                      <div className="field">
                        <label className="label">
                          Company's linkedin profile
                        </label>
                        <input
                          {...input}
                          type="text"
                          placeholder="linkedInURL"
                          className={`input ${meta.error &&
                            meta.touched &&
                            "is-danger"} ${!meta.error && " is-primary "}`}
                        />
                      </div>
                    )}
                  </Field>
                  <Field name="companyWebsite">
                    {({ input, meta }) => (
                      <div className="field">
                        <label className="label">Company's website</label>
                        <input
                          {...input}
                          type="text"
                          placeholder="Company's website"
                          className={`input ${meta.error &&
                            meta.touched &&
                            "is-danger"} ${!meta.error && " is-primary "}`}
                        />
                      </div>
                    )}
                  </Field>

                  <div className="control">
                    <button
                      className={`button is-primary ${isLoading &&
                        "is-loading"}`}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
