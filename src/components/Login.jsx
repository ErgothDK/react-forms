import { useState, useRef } from "react";
import Input from "./UI/Input.jsx";
import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isEqualsToOtherValue,
} from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: email,
    changeHandler: inputEmailHandler,
    blurHandler: inputEmailBlurHandler,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isNotEmpty(value) && isEmail(value);
  });

  const {
    value: password,
    changeHandler: inputPasswordHandler,
    blurHandler: inputPasswordBlurHandler,
    hasError: passwordHasError,
  } = useInput("", (value) => {
    return hasMinLength(value, 6);
  });

  function submitHandler(e) {
    e.preventDefault();

    if (emailHasError || passwordHasError) return;

    console.log(email, password);
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
          onChange={inputEmailHandler}
          onBlur={inputEmailBlurHandler}
          value={email}
          error={emailHasError && "Email is not valid"}
          required
        />

        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={inputPasswordHandler}
          onBlur={inputPasswordBlurHandler}
          value={password}
          error={
            passwordHasError && "Password must be at least 6 characters long"
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
