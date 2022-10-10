import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { taskRegex } from "../Helper";

const Todo = () => {
  const [newData, setNewData] = useState([])
  const [data,setData] = useState([]);
  const [newTask, setNewtask] = useState("");
  const [taskErr, setTaskErr] = useState(null);
  const [formVaild, setFormVaild] = useState(false);
  const [id, setId] = useState(null);
  const [showMore, setShowMore] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const Validator = () => {
    let isValid = false;
    if (newTask.trim().length === 0) {
      setTaskErr("Please Enter Task");
      isValid = false;
    } else if (taskRegex.test(newTask)) {
      setTaskErr("");
      isValid = true;
    } else {
      setTaskErr("Please Enter valid Firstname");
      isValid = false;
    }
    if (isValid) {
      setFormVaild(true);
    }
  };
  const submitValue = () => {
    Validator();
    if (formVaild) {
      const frmdetails = {
        newTask: newTask,
      };
      console.log(frmdetails);
    }
    if (id) {
      axios
        .put(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`, {
          newTask: newTask,
        })
        .then(function (response) {
          console.log(response.data);
          getData();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .post(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo`, {
          newTask: newTask,
        })
        .then(function (response) {
          console.log(response.data);
          getData();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const getData = () => {
    axios
      .get("https://632ae4cd1090510116cb07ce.mockapi.io/Todo")
      .then((response) => {
        // console.log("==>>", response.data);
        setData(response.data);
       const view = response.data.slice(0 ,5);
       setNewData(view)
      });
  };
  const deleteData = (id) => {
    axios
      .delete(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`)
      .then((response) => {
        console.log("deleted");
        getData();
      });
  };
  const handleTask = (isCom, id) => {
    axios
      .put(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`, {
        isCom: isCom,
      })
      .then((res) => {
        console.log("Check", res.isCom);
      });
  };
  const editData = (id) => {
    axios
      .get(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`, {
        newTask: newTask,
      })
      .then((res) => {
        setNewtask(res?.data?.newTask);
        setId(res.data.id)
        console.log("edit", res.data);
      });
  };
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const Time = `${current.toLocaleTimeString()}`;
  return (
    <>
      <Navbar />
      <div className="Backg">
        <div className="Crud">
          <div className="card text-center">
            <div className="card-header">
              <h1>TODO!!!</h1>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your Task here..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={newTask}
                  onChange={(e) => setNewtask(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-info btn-lg"
                    onClick={() => submitValue()}
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="error">{taskErr}</div>
            </div>
          </div>
        </div>
        <div className="Table">
          <div className="card text-center">
            <div className="card-header">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Id.</th>
                    <th scope="col">Todo Name</th>
                    <th scope="col"></th>
                    <th scope="col">EDIT</th>
                    <th scope="col">DELETE</th>
                    <th scope="col">Time</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {showMore?newData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item?.newTask}</td>
                        <td>
                          <label className="switch">
                            <input
                              className="switch-input"
                              type="checkbox"
                              defaultChecked={item.isCom}
                              onChange={(e) =>
                                handleTask(e.target.checked, item.id)
                              }
                            />
                            <span
                              className="switch-label"
                              data-on="Completed"
                              data-off="Pending"
                            ></span>
                            <span className="switch-handle"></span>
                          </label>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(e) => editData(item.id)}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteData(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td>{Time}</td>
                        <td>{date}</td>
                      </tr>
                    );}):data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{item.id}</th>
                          <td>{item?.newTask}</td>
                          <td>
                            <label className="switch">
                              <input
                                className="switch-input"
                                type="checkbox"
                                defaultChecked={item.isCom}
                                onChange={(e) =>
                                  handleTask(e.target.checked, item.id)
                                }
                              />
                              <span
                                className="switch-label"
                                data-on="Completed"
                                data-off="Pending"
                              ></span>
                              <span className="switch-handle"></span>
                            </label>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={(e) => editData(item.id)}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => deleteData(item.id)}
                            >
                              Delete
                            </button>
                          </td>
                          <td>{Time}</td>
                          <td>{date}</td>
                        </tr>
                      );})
                  }
                </tbody>
                <br />
                <button type="button" onClick={() => setShowMore(!showMore)} className="btn btn-success">
                  {showMore ? "View All" : "View Less"}
                </button>
              </table>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
export default Todo;
//✔