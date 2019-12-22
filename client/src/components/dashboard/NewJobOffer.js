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
              <div>
                <input
                  {...input}
                  type="text"
                  placeholder="positionTitle"
                  className="login__input"
                />
                {meta.error && meta.touched && (
                  <div className="text-red">{meta.error}</div>
                )}
              </div>
            )}
          </Field>
          <Field name="city">
            {({ input, meta }) => (
              <div>
                <input
                  {...input}
                  type="text"
                  placeholder="city"
                  className="login__input"
                />
                {meta.error && meta.touched && (
                  <div className="text-red">{meta.error}</div>
                )}
              </div>
            )}
          </Field>
          <button className="login__btn" type="submit">
            Dodaj ofertę
          </button>
        </form>
      )}
    />
  );
};

export default NewJobOffer;
