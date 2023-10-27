import { useState, useRef } from "react";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={inputHandler}
            value={userInput.email}
            required
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={inputHandler}
            value={userInput.password}
            required
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
