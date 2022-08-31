import React, {  } from "react";

const Navbar = () => {
  console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light justify-content-between m-1">
      <a className="navbar-brand">
        <b>Registration Form</b>
      </a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-1 p-2 m-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </nav>
  );
};
export default Navbar;
