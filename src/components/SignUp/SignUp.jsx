import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    setError("");
    if (password !== confirm) {
      setError("Password and Confirm Password are not same");
    } else if (password.length < 6) {
      setError("Password must be 6 characters");
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error);
      });
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="username">email:</label>
          <input type="email" id="" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm">Confirm Password:</label>
          <input type="password" id="" name="confirm" required />
        </div>
        <button type="submit">Sign up</button>
        <p>
          <small>
            Already have an account? <Link to="/login">login</Link>
          </small>
        </p>
        {error && (
          <p className="error-msg">
            <small>{error}</small>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
