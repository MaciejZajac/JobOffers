import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ALogin } from "../../actions/authActions";
import { Form, Field } from "react-final-form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorArray, setErrorArray] = useState([]);

  const dispatch = useDispatch();

  const validate = () => {
    let result = true;
    let errorArr = [];
    if (email.length < 4) {
      result = false;
      errorArr.push("email");
    }
    if (password.length < 4) {
      result = false;
      errorArr.push("password");
    }

    setErrorArray(errorArr);
    return result;
  };
  const onSubmit = values => {
    console.log("values", values);
    // e.preventDefault();

    // if (validate()) {
    //   const user = {
    //     email,
    //     password
    //   };
    //   dispatch(ALogin(user));
    // }
  };
  return (
    <div className="login">
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 4) {
            errors.password = "Password must be atleast 4 digits";
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <form className="login__form" onSubmit={handleSubmit}>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="email"
                    placeholder="Email"
                    className="login__input"
                  />
                  {meta.error && meta.touched && <div>{meta.error}</div>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <input
                    {...input}
                    type="password"
                    placeholder="Password"
                    className="login__input"
                  />
                  {meta.error && meta.touched && <div>{meta.error}</div>}
                </div>
              )}
            </Field>
            <button className="login__btn" type="submit">
              Zaloguj się
            </button>
            {/* <input
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

        <button className="login__btn" type="submit" onClick={handleLogin}>
          Zarejestruj się
        </button> */}
          </form>
        )}
      />
    </div>
  );
};

export default Login;
