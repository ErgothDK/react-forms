import { useState, useRef } from "react";
import Input from "./UI/Input.jsx";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    console.log(userInput);
  }

  function inputHandler(e) {
    setUserInput((prevValues) => ({
      ...prevValues,
      [e.target.id]: e.target.value,
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
          value={userInput.email}
          required
        />

        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={inputHandler}
          value={userInput.password}
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
