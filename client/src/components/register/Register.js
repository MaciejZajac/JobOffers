import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ARegister } from "../../actions/authActions";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    if (password !== confirmPassword || confirmPassword.length === 0) {
      result = false;
      errorArr.push("confirmPassword");
    }
    setErrorArray(errorArr);
    return result;
  };
  const handleRegistration = e => {
    e.preventDefault();

    if (validate()) {
      const newUser = {
        email,
        password,
        confirmPassword
      };
      dispatch(ARegister(newUser));
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
          onClick={handleRegistration}
        >
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};

export default Register;
