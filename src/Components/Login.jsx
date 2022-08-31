import React, { } from "react";
import { Link } from "react-router-dom";

const Login = (e) => {
  console.log("Registration - Rendered");
  // e.preventDefault();

  return (
    <>
    <div className="F">
      <form>
        <label>UserName or E-mail</label>
        <input 
          type="email" 
          id="email" 
          name="firstname" 
          placeholder="userId" 
        />

        <label>Password</label>
        <input
          type="password"
          id="passwod"
          name="password"
          placeholder="Password"
        />

        <input 
          type="submit" 
          value="Submit" 
        />
      </form>
    </div>
    <div className="FF">
      <p>New Here? </p>
      <Link to="/goBack">
      Click Here
      </Link>
    </div>
    </>
  );
};
export default Login;
