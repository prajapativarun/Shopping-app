import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Dash = () => {
  const [Table, setTable] = useState([]);
  const [Todo, setTodo] = useState([]);
  const [time, setTime] = useState(
    `${new Date().getHours()}:${
      new Date().getMinutes()}:${
        new Date().getSeconds()}`
  );
  const [date, setDate] = useState(
    `${new Date().getDate()}:${
      new Date().getMonth() + 1
    }:${new Date().getFullYear()}`
  );
  setInterval(() => {
    setTime(
      `${new Date().getHours()}:${
        new Date().getMinutes()}:${
          new Date().getSeconds()}`
    );
    setDate(
      `${new Date().getDate()}:${
        new Date().getMonth() + 1
      }:${new Date().getFullYear()}`
    );
  }, 1000);
  useEffect(() => {
    dashTable();
    dashTodo();
  }, []);
  const dashTable = () => {
    axios
      .get("https://632ae4cd1090510116cb07ce.mockapi.io/crud")
      .then((response) => {
        console.log("==>>", response.data);
        setTable(response.data);
      });
  };
  const dashTodo = () => {
    axios
      .get("https://632ae4cd1090510116cb07ce.mockapi.io/Todo")
      .then((response) => {
        console.log("==>>", response.data);
        setTodo(response.data);
      });
  };
  return (
    <>
      <Navbar />
      <div className="Backg">
        <div className="Mainbl">
          <div className="Secpurl">
            <div className="Boxes">
              <h1>Total Table Data:{Table.length}</h1>
            </div>
            <div className="Boxes">
              <h1>Total Todo Data:{Todo.length}</h1>
            </div>
            <div className="Boxes">
              <h1>Today's Date:{date}</h1>
            </div>
            <div className="Boxes">
              <h1>Time:{time}</h1>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
export default Dash;
