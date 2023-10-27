import { useState, useRef } from "react";
import Input from "./UI/Input.jsx";
import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isEqualsToOtherValue,
} from "../util/validation.js";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const [isEdit, setIsEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    isEdit.email && (!isNotEmpty(userInput.email) || !isEmail(userInput.email));
  const passwordIsInvalid =
    isEdit.password && !hasMinLength(userInput.password, 6);

  console.log(emailIsInvalid, passwordIsInvalid);

  function submitHandler(e) {
    e.preventDefault();
    console.log(emailIsInvalid);
  }

  function inputHandler(e) {
    setUserInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function inputBlurHandler(e) {
    setIsEdit((prevState) => ({
      ...prevState,
      [e.target.id]: true,
    }));
  }
  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          onChange={inputHandler}
          onBlur={inputBlurHandler}
          value={userInput.email}
          error={emailIsInvalid && "Email is not valid"}
          required
        />

        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={inputHandler}
          onBlur={inputBlurHandler}
          value={userInput.password}
          error={
            passwordIsInvalid && "Password must be at least 6 characters long"
          }
          required
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
