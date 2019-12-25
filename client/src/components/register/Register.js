import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import { ARegister } from "../../actions/authActions";
import { SIsAuthLoading } from "../../selectors";

const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(SIsAuthLoading);

  const handleSubmitReg = values => {
    dispatch(ARegister(values));
  };

  return (
    <div className="container">
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
          <Form
            onSubmit={handleSubmitReg}
            validate={values => {
              const errors = {};
              if (!values.email || !values.email.includes("@")) {
                errors.email = "Required";
              }
              if (!values.password) {
                errors.password = "Required";
              } else if (values.password.length < 4) {
                errors.password = "Password must be atleast 4 digits";
              }
              if (
                !values.confirmPassword ||
                values.confirmPassword !== values.password
              ) {
                errors.confirmPassword = "Passwords must be equal";
              }
              return errors;
            }}
            render={({ handleSubmit }) => (
              <form className="login__form" onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <div className="field">
                      <label className="label">Email</label>
                      <input
                        {...input}
                        type="email"
                        placeholder="Email"
                        className="input"
                      />
                      {meta.error && meta.touched && (
                        <div className="text-red">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <div className="field">
                      <label className="label">Password</label>
                      <input
                        {...input}
                        type="password"
                        placeholder="Password"
                        className="input"
                      />
                      {meta.error && meta.touched && (
                        <div className="text-red">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="confirmPassword">
                  {({ input, meta }) => (
                    <div className="field">
                      <label className="label">Confirm Password</label>
                      <input
                        {...input}
                        type="password"
                        placeholder="Confirm Password"
                        className="input"
                      />
                      {meta.error && meta.touched && (
                        <div className="text-red">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <div className="control">
                  <button
                    className={`button is-primary ${isLoading && "is-loading"}`}
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
            )}
          />
          {/* <form className="login__form">
        <input
          name="email"
          className={`login__input ${
            errorArray.includes("email") ? "login__input--error" : ""
          }`}
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          name="password"
          className={`login__input ${
            errorArray.includes("password") ? "login__input--error" : ""
          }`}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <input
          name="confirmPassword"
          className={`login__input ${
            errorArray.includes("confirmPassword") ? "login__input--error" : ""
          }`}
          type="password"
          placeholder="Repeat password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button
          className="login__btn"
          type="submit"
          onClick={handleSubmitReg}
        >
          Zarejestruj się
        </button>
      </form> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
