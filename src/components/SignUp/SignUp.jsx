import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, password, confirm);
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm">Confirm Password:</label>
          <input type="password" id="" name="confirm" />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <p>
        <small>
          Already have an account? <Link to="/login">login</Link>
        </small>
      </p>
    </div>
  );
};

export default SignUp;
