import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  const removeToken = (userToken) => {
    localStorage.clear();
    Navigate("/");
    // setToken(null);
  };
  return (
    <nav className="navbar navbar-light bg-dark justify-content-around">
      <Link to="/">
        <img
          src="https://frontendarmy.com/wp-content/uploads/2022/02/frontendarmy-logo.svg"
          alt="logo"
          className="m-2"
          width="100"
        />
      </Link>
      <li className="nav-item">
        <Link className="link" to="/table">
          Table
        </Link>
      </li>
      <li className="nav-item">
        <Link className="link" to="/file">
          File Upload
        </Link>
      </li>
      <li className="nav-item">
        <Link className="link" to="/dragcom">
          Drag Components
        </Link>
      </li>
      <li className="nav-item">
        <Link className="link" to="/todo">
          To-Do List
        </Link>
      </li>
      <li className="nav-item" onClick={() => removeToken()}>
        <Link className="link" to="/login">
          LogOut
        </Link>
      </li>
      {/* <button
        className="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      > 
        <span className="navbar-toggler-icon"></span>
      </button>*/}
    </nav>
  );
};
export default Navbar;
