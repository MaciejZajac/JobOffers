import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ALogin } from "../../actions/authActions";

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
  const handleLogin = e => {
    e.preventDefault();

    if (validate()) {
      const user = {
        email,
        password
      };
      dispatch(ALogin(user));
    }
  };
  return (
    <div className="login">
      <form className="login__form">
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

        <button className="login__btn" type="submit" onClick={handleLogin}>
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};

export default Login;
