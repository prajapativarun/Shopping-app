import React, {  } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from 'react';

const Registration = () => {
 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [passwod, setPassword] = useState("");
    const [number, setNumber] = useState("");

    const submitValue = (e) => {
        const frmdetails = {
            'First Name' : firstName,
            'Last Name' : lastName,
            'Email' : email,
            'Password' : passwod,
            'Number' : number
        }
        console.log(frmdetails);
        // e.preventDefault();
    }
    console.log("Registration - Rendered");

  return (
    
    <>
    <div className="F">
      <form>
        <label>First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Your name.."
          required
          onChange={e => setFirstName(e.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Your last name.."
          required
          onChange={e => setLastName(e.target.value)}
        />

        <label>E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="abc@abc.abc"
          required
          onChange={e => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          onChange={e => setPassword(e.target.value)}
        />

        <label>Number</label>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="+00 00000 00000"
          required
          onChange={e => setNumber(e.target.value)}
        />

        <label>Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <Link to="/goLogin">
          <input type="submit" value="Submit" onClick={submitValue} />
        </Link>
      </form>
    </div>
    <div className="FF">
        <p>Already User? </p>
        <Link to="/goAgain">
        Click Here
        </Link>
    </div>
    </>
  );
};


export default Registration;
