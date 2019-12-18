import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorArray, setErrorArray] = useState([]);

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
      console.log("eamil", email);
      console.log("password", password);
      console.log("confirm", confirmPassword);

      setEmail("");
      setPassword("");
      setConfirmPassword("");
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
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <input
          name="confirmPassword"
          className={`login__input ${
            errorArray.includes("confirmPassword") ? "login__input--error" : ""
          }`}
          type="text"
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
