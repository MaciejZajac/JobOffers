import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { ANewOffer } from "../../actions/offerActions";

const NewJobOffer = () => {
  const dispatch = useDispatch();

  const handleSubmit = offer => {
    dispatch(ANewOffer(offer));
  };

  return (
    <div className="container">
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
          <Form
            onSubmit={handleSubmit}
            validate={values => {
              const errors = {};
              if (!values.positionTitle || values.positionTitle.length < 4) {
                errors.positionTitle = "Required";
              }
              if (!values.city || values.city.length < 4) {
                errors.city = "Required";
              }
              if (!values.companyName) {
                errors.companyName = "Required";
              }
              if (!values.experience) {
                errors.experience = "Required";
              }
              if (!values.companyDescription) {
                errors.companyDescription = "Required";
              }
              if (!values.projectDescription) {
                errors.projectDescription = "Required";
              }
              if (!values.companyPage) {
                errors.companyPage = "Required";
              }

              return errors;
            }}
            render={({ handleSubmit }) => (
              <form className="form" onSubmit={handleSubmit}>
                <Field name="positionTitle">
                  {({ input, meta }) => (
                    <div className="field">
                      <label className="label">Job Title</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="Job title"
                        className={`input  ${meta.error &&
                          meta.touched &&
                          "is-danger"} ${!meta.error && " is-primary "}`}
                      />
                    </div>
                  )}
                </Field>
                <Field name="city">
                  {({ input, meta }) => (
                    <div className="field">
                      <label className="label">Miasto</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="City"
                        className={`input  ${meta.error &&
                          meta.touched &&
                          "is-danger"} ${!meta.error && " is-primary "}`}
                      />
                    </div>
                  )}
                </Field>
                <Field name="companyName">
                  {({ input, meta }) => (
                    <div className="field">
                      <label className="label">Company name</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="companyName"
                        className={`input  ${meta.error &&
                          meta.touched &&
                          "is-danger"} ${!meta.error && " is-primary "}`}
                      />
                    </div>
                  )}
                </Field>
                <Field name="experience" component="select">
                  {({ input, meta }) => (
                    <div className="field">
                      <label className="label">Experience</label>
                      <div
                        className={`select is-small  ${meta.error &&
                          meta.touched &&
                          "is-danger"} ${!meta.error && " is-primary "}`}
                      >
                        <select {...input} placeholder="experience">
                          <option />
                          <option value="internship">Internship</option>
                          <option value="junior">Junior</option>
                          <option value="mid">Mid</option>
                          <option value="senior">Senior</option>
                        </select>
                      </div>
                    </div>
                  )}
                </Field>
                <Field name="companyDescription">
                  {({ input, meta }) => (
                    <div className="field">
                      <label className="label">Company description</label>
                      <textarea
                        {...input}
                        type="text"
                        placeholder="companyDescription"
                        className={`textarea  ${meta.error &&
                          meta.touched &&
                          "is-danger"} ${!meta.error && " is-primary "}`}
                      />
                    </div>
                  )}
                </Field>

                <Field name="projectDescription">
                  {({ input, meta }) => (
                    <div className="field">
                      <label className="label">Project description</label>
                      <textarea
                        {...input}
                        type="text"
                        placeholder="projectDescription"
                        className={`textarea  ${meta.error &&
                          meta.touched &&
                          "is-danger"} ${!meta.error && " is-primary "}`}
                      />
                    </div>
                  )}
                </Field>
                <Field name="companyPage">
                  {({ input, meta }) => (
                    <div className="field">
                      <label className="label">Company page</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="companyPage"
                        className={`input  ${meta.error &&
                          meta.touched &&
                          "is-danger"} ${!meta.error && " is-primary "}`}
                      />
                    </div>
                  )}
                </Field>

                <div className="control">
                  <button className="button is-primary" type="submit">
                    Dodaj ofertę
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default NewJobOffer;
