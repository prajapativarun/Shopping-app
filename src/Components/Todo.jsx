import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { taskRegex } from "../Helper";
const Todo = () => {
  const [newData, setNewData] = useState([]); //To set newdata in an Array
  const [data, setData] = useState([]); //To set data in an Array
  console.log("DATAAAA",data?.length)
  const [newTask, setNewtask] = useState(""); //As a string the input data is added
  const [taskErr, setTaskErr] = useState(null); //Display error msg for input field
  const [formVaild, setFormVaild] = useState(false); //form validation
  const [id, setId] = useState(null); //is use for edit
  const [showMore, setShowMore] = useState(true); //for show more or less in the end
  const [loading, setLoading] = useState(false); //Loader of Delete
  const [loadinggg, setLoadinggg] = useState(false); //Loader of Add
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
    if (Validator() === true) {
      setLoadinggg(true);
    } else {
      setLoadinggg(false);
    }
    if (formVaild) {
      const frmdetails = {
        newTask: newTask,
      };
      console.log(frmdetails);
    }
    if (id) {
      setLoadinggg(true);
      axios
        .put(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`, {
          newTask: newTask,
        })
        .then(function (response) {
          console.log(response.data);
          setLoadinggg(false);
          getData();
          setNewtask("");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setLoadinggg(true);
      axios
        .post(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo`, {
          newTask: newTask,
        })
        .then(function (response) {
          console.log(response.data);
          setLoadinggg(false);
          getData();
          setNewtask("");
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
        const view = response.data.slice(0, 5);
        setNewData(view);
      });
  };
  const deleteData = (id, index) => {
    setLoading(index);
    console.log("ind", index);
    axios
      .delete(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`)
      .then((response) => {
        setLoading(false);
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
    const time = `${current.toLocaleTimeString()}`;
    console.log("ID", date);
    console.log("DATE", time);
    axios
      .put(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`, {
        time: time,
        date: date,
      })
      .then((res) => {
        console.log(res);
      });
    axios
      .get(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`, {
        newTask: newTask,
      })
      .then((res) => {
        setNewtask(res?.data?.newTask);
        setId(res.data.id);
        console.log(res.data.time);
        console.log("edit", res.data);
      });
  };
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  
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
                    disabled={!newTask}
                  >
                    {loadinggg ? (
                      <i className="fa fa-spinner fa-spin" />
                    ) : (
                      "Add"
                    )}
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
                  { data.length > 0 
                  ? (showMore
                    ? newData.map((item, index) => {
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
                                onClick={() => deleteData(item.id, index)}
                              >
                                {loading === index && (
                                  <i className="fa fa-spinner fa-spin" />
                                )}
                                Delete
                              </button>
                            </td>
                            <td>{item.time}</td>
                            <td>{item.date}</td>
                          </tr>
                        );
                      })
                    : (data.map((item, index) => {
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
                                onClick={() => deleteData(item.id, index)}
                              >
                                {loading === index && (
                                  <i className="fa fa-spinner fa-spin" />
                                )}
                                Delete
                              </button>
                            </td>
                            <td>{item.time}</td>
                            <td>{item.date}</td>
                          </tr>
                        )}))
                      ) : <div><h3>No data Found</h3></div>
                    }
                </tbody>
                <br />
                <button
                  type="button"
                  onClick={() => setShowMore(!showMore)}
                  className="btn btn-success"
                >
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
export default Todo; //✔
