import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        {user ? (
          <small className="user">
            welcome {user.email}{" "}
            <button className="logOut-btn" onClick={() => handleLogOut()}>
              Log Out
            </button>
          </small>
        ) : (
          <span>
            <Link to="/login">Login</Link>
            <Link to="/signUp">Sign up</Link>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
