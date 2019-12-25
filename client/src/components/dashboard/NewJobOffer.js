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
      <div class="columns is-mobile is-centered">
        <div class="column is-one-third">
          <Form
            onSubmit={handleSubmit}
            validate={values => {
              const errors = {};
              if (!values.positionTitle) {
                errors.positionTitle = "Required";
              }
              if (!values.city) {
                errors.city = "Required";
              }

              return errors;
            }}
            render={({ handleSubmit }) => (
              <form className="form" onSubmit={handleSubmit}>
                <Field name="positionTitle">
                  {({ input, meta }) => (
                    <div className="field">
                      <label class="label">Job Title</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="Job title"
                        className="input"
                      />
                      {meta.error && meta.touched && (
                        <div className="text-red">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="city">
                  {({ input, meta }) => (
                    <div className="field">
                      <label class="label">Miasto</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="City"
                        className="input"
                      />
                      {meta.error && meta.touched && (
                        <div className="text-red">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <div class="control">
                  <button class="button is-primary" type="submit">
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
