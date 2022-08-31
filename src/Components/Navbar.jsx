import React from "react";

const Navbar = () => {
  console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-light bg-dark justify-content-around">
      {/* <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> */}

      {/* <div class="collapse navbar-collapse " id="navbarNavAltMarkup"> */}
        <li class="nav-item ">
          <a class="link" href="/Read">
            Read
          </a>
        </li>
        <li class="nav-item">
          <a class="link" href="/File">
            File Upload
          </a>
        </li>
        <li class="nav-item">
          <a class="link" href="/dragcom">
            Drag Components
          </a>
        </li>
        <li class="nav-item">
          <a class="link" href="/todo">
            To-Do List
          </a>
        </li>
        <li class="nav-item">
          <a class="link" href="/User">
            User
          </a>
        </li>
        <li class="nav-item">
          <a class="link" href="/New">
            New
          </a>
        </li>
        <li class="nav-item">
          <a class="link" href="/Newdata">
            Newdata
          </a>
        </li>
        <a href="/goLogin">
        <img
          src="https://frontendarmy.com/wp-content/uploads/2022/02/frontendarmy-logo.svg"
          alt="logo"
          className="m-2"
          width="100"
        />
      </a>
      {/* </div> */}
      {/* <a className="navbar-brand">
        <b>Registration Form</b>
      </a> */}

      {/* <a href="/">
        <b>Home</b>
      </a>
      <a href="/">
        <b>To-do</b>
      </a>
      <a href="/">
        <b>Pagination</b>
      </a>
      <a href="/">
        <b>Car Game</b>
      </a> */}
      {/* <form className="form-inline">
        <input
          className="form-control mr-sm-1 p-2 m-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form> */}
    </nav>
  );
};
export default Navbar;
