import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import { fnameRegex, lnameRegex, phNoRegex, emailRegex } from "../../Helper";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(null);
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState(null);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(null);
  const [phNo, setPhNo] = useState("");
  const [phNoErr, setPhNoErr] = useState(null);
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
    if (phNo.trim().length === 0) {
      setPhNoErr("Please Enter Number");
      isValid = false;
    } else if (phNoRegex.test(phNo)) {
      setPhNoErr("");
      isValid = true;
    } else {
      setPhNoErr("Please Enter valid Number");
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
        Email: email,
        Phone: phNo,
      };
      console.log(frmdetails);
      axios
        .post("https://632ae4cd1090510116cb07ce.mockapi.io/crud", {
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          PhoneNo: phNo,
        })
        .then((response) => {
          console.log(response.data);
          navigate("/table");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <Navbar />
      <div className="Backg">
        <div className="F">
          <h1>Create</h1>
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
            <label>PhoneNo:</label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="PhoneNo.."
              maxLength="10"
              required
              value={phNo}
              onChange={(e) => setPhNo(e.target.value)}
            />
            <div className="error">{phNoErr}</div>
            <button
              className="reg-btn"
              type="submit"
              value="Submit"
              onClick={() => submitValue()}
            >
              Add
            </button>
          </form>
        </div>
        <br />
      </div>
    </>
  );
};
export default Create;
