import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { unameRegex, passWordRegex } from "../Helper";

const Login = (e) => {
  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState(null);
  const [passWord, setPassword] = useState("");
  const [passWordErr, setPasswordErr] = useState(null);
  const [formVaild, setFormVaild] = useState(false);
  const navigate = useNavigate();
  const Validator = () => {
    let isValid = false;
    if (userName.trim().length === 0) {
      setUserNameErr("Please Enter Username");
      isValid = false;
    } else if (unameRegex.test(userName)) {
      setUserNameErr("");
      isValid = true;
    } else {
      setUserNameErr("Please Enter valid Username");
      isValid = false;
    }
    if (passWord.trim().length === 0) {
      setPasswordErr("Please Enter Password");
      isValid = false;
    } else if (passWordRegex.test(passWord)) {
      setPasswordErr("");
      isValid = true;
    } else {
      setPasswordErr("Please Enter valid Password");
      isValid = false;
    }
    if (isValid) {
      setFormVaild(true);
    }
  };
  const submitValue = (e) => {
    Validator();
    e.preventDefault();
    console.log(formVaild);

    if (formVaild) {
      const frmdetails = {
        UserName: userName,
        Password: passWord,
      };
      console.log(frmdetails);
      var body = {
        username: userName,
        password: passWord,
      };
      axios({
        method: "post",
        url: "https://www.mecallapi.com/api/login",
        data: body,
      })
        .then(function (response) {
          console.log(response);
          if (response?.status === 200) {
            localStorage.setItem("accessToken", response.data.accessToken);
            navigate("/");
            window.reload();
          }
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status === 401) {
            alert("Please Enter right Username");
          }
        });
    }
  };
  return (
    <>
      <div className="Backgg">
        <div className="F">
          <h1>SignIn</h1>
          <br />
          <form method="post" onSubmit={submitValue}>
            <label>UserName or E-mail</label>
            <input
              type="email"
              id="email"
              name="firstname"
              required
              value={userName}
              placeholder="userId"
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="error">{userNameErr}</div>
            <label>Password</label>
            <input
              type="password"
              id="passwod"
              name="password"
              required
              value={passWord}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error">{passWordErr}</div>
            <button
              className="reg-btn"
              type="submit"
              value="Submit"
              onClick={() => submitValue()}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="FF">
          <p>New Here? </p>
          <Link to="/reg">Click Here</Link>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
    </>
  );
};
export default Login;
