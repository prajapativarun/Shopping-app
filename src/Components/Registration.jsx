import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  fnameRegex,
  lnameRegex,
  unameRegex,
  passWordRegex,
  emailRegex,
} from "../Helper";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(null);
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState(null);
  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState(null);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(null);
  const [passWord, setPassword] = useState("");
  const [passWordErr, setPasswordErr] = useState(null);
  const [formVaild, setFormVaild] = useState(false);
  const navigate = useNavigate();
  const Validator = () => {
    let isValid = false;
    if (firstName.trim().length === 0) {
      setFirstNameErr("Please Enter Firstname");
      isValid = false;
    } else if (fnameRegex.test(firstName)) {
      setFirstNameErr("");
      isValid = true;
    } else {
      setFirstNameErr("Please Enter valid Firstname");
      isValid = false;
    }

    if (lastName.trim().length === 0) {
      setLastNameErr("Please Enter Lastname");
      isValid = false;
    } else if (lnameRegex.test(lastName)) {
      setLastNameErr("");
      isValid = true;
    } else {
      setLastNameErr("Please Enter valid Lastname");
      isValid = false;
    }

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

    if (email.trim().length === 0) {
      setEmailErr("Please Enter Email");
      isValid = false;
    } else if (emailRegex.test(email)) {
      setEmailErr("");
      isValid = true;
    } else {
      setEmailErr("Please Enter valid Email");
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
        FirstName: firstName,
        LastName: lastName,
        UserName: userName,
        Email: email,
        Password: passWord,
      };
      console.log(frmdetails);
      var body = {
        fname: firstName,
        lname: lastName,
        username: userName,
        email: email,
        password: passWord,
        avatar: "https://www.mecallapi.com/users/cat.png",
      };

      axios({
        method: "post",
        url: "https://www.mecallapi.com/api/users/create",
        data: body,
      })
        .then(function (response) {
          console.log(response);
          navigate("/login");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div className="Backgg">
        <div className="F">
          <h1>SignUp</h1>
          <br />
          <form method="post" onSubmit={submitValue}>
            <label>First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Your name.."
              maxLength="15"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div className="error">{firstNameErr}</div>
            <label>Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Your last name.."
              maxLength="15"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="error">{lastNameErr}</div>
            <label>User Name</label>
            <input
              type="text"
              id="username"
              name="Username"
              placeholder="Your id.."
              maxLength="15"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="error">{userNameErr}</div>
            <label>E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@abc.abc"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error">{emailErr}</div>
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              maxLength="8"
              required
              value={passWord}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error">{passWordErr}</div>
            <button
              className="reg-btn"
              type="submit"
              value="Submit"
              onClick={() => submitValue()}
            >
              Register
            </button>
          </form>
        </div>
        <div className="FF">
          <p>Already User? </p>
          <Link to="/login">Click Here</Link>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};
export default Registration;
