import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(location);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((res) => {
        const loggedUser = res.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err);
      });
    form.reset();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Username:</label>
          <input type="email" id="" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={visibility ? "password" : "text"}
            id="password"
            name="password"
            required
          />
          <p onClick={() => setVisibility(!visibility)}>
            <small>{visibility ? "Show" : "Hide"} Password</small>
          </p>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        <small>
          New To Ema-John? <Link to="/signUp">Sign up</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
