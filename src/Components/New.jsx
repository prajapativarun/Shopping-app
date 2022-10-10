// import React, {  } from 'react';
// import Navbar from './Navbar';
// const New = () => {
//     return(
//         <>
//         <Navbar/>
//         <div className='Backg'>
//             <div className='Mainbl'>
//                 <div className='Secpurl'>
//                     <h5>Sorry! We are currently UnderConstruction</h5>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// };
// export default New;

// class Application extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       cars: [
//         { name: "Audi", country: "Germany" },
//         { name: "BMW", country: "Germany" },
//         { name: "Chevrolet", country: "USA" },
//         { name: "Citroen", country: "France" },
//         { name: "Hyundai", country: "South Korea" },
//         { name: "Mercedes-Benz", country: "Germany" },
//         { name: "Renault", country: "France" },
//         { name: "Seat", country: "Spain" },
//       ],
//       itemsToShow: 3,
//       expanded: false,
//     };

//     this.showMore = this.showMore.bind(this);
//   }

//   showMore() {
//     this.state.itemsToShow === 3
//       ? this.setState({ itemsToShow: this.state.cars.length, expanded: true })
//       : this.setState({ itemsToShow: 3, expanded: false });
//   }
//   render() {
//     return (
//       <div className="container">
//         <h3>Click show more to see more data</h3>
//         <div className="row">
//           <h3>List of Cars</h3>
//           <ul>
//             {this.state.cars.slice(0, this.state.itemsToShow).map((car, i) => (
//               <li key={i}>
//                 {car.name} - {car.country}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <p>
//           <a className="btn btn-primary" onClick={this.showMore}>
//             {this.state.expanded ? (
//               <span>Show less</span>
//             ) : (
//               <span>Show more</span>
//             )}
//           </a>
//           .{" "}
//         </p>
//       </div>
//     );
//   }
// }

// React.render(<Application />, document.getElementById("app"));
// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import axios from "axios";
// import { taskRegex } from "../Helper";

// const Todo = () => {
//   const [newData, setNewData] = useState([]);
//   const [data,setData] = useState([]);
//   const [newTask, setNewtask] = useState("");
//   const [taskErr, setTaskErr] = useState(null);
//   const [formVaild, setFormVaild] = useState(false);
//   const [id, setId] = useState(null);
//   const [showMore, setShowMore] = useState(true);
//   useEffect(() => {
//     getData();
//   }, []);

//   const Validator = () => {
//     let isValid = false;
//     if (newTask.trim().length === 0) {
//       setTaskErr("Please Enter Task");
//       isValid = false;
//     } else if (taskRegex.test(newTask)) {
//       setTaskErr("");
//       isValid = true;
//     } else {
//       setTaskErr("Please Enter valid Firstname");
//       isValid = false;
//     }
//     if (isValid) {
//       setFormVaild(true);
//     }
//   };
//   const submitValue = () => {
//     Validator();
//     if (formVaild) {
//       const frmdetails = {
//         newTask: newTask,
//       };
//       console.log(frmdetails);
//     }
//     if (id) {
//       axios
//         .put(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`, {
//           newTask: newTask,
//         })
//         .then(function (response) {
//           console.log(response.data);
//           getData();
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     } else {
//       axios
//         .post(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo`, {
//           newTask: newTask,
//         })
//         .then(function (response) {
//           console.log(response.data);
//           getData();
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     }
//   };
//   const getData = () => {
//     axios
//       .get("https://632ae4cd1090510116cb07ce.mockapi.io/Todo")
//       .then((response) => {
//         // console.log("==>>", response.data);
//         setData(response.data);
//         const view = response.data.slice(0, 5);
//         setNewData(view)
//       });
//   };
//   const deleteData = (id) => {
//     axios
//       .delete(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`)
//       .then((response) => {
//         console.log("deleted");
//         getData();
//       });
//   };
//   const handleTask = (isCom, id) => {
//     axios
//       .put(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`, {
//         isCom: isCom,
//       })
//       .then((res) => {
//         console.log("Check", res.isCom);
//       });
//   };
//   const editData = (id) => {
//     axios
//       .get(`https://632ae4cd1090510116cb07ce.mockapi.io/Todo/${id}`, {
//         newTask: newTask,
//       })
//       .then((res) => {
//         setNewtask(res?.data?.newTask);
//         setId(res.data.id)
//         console.log("edit", res.data);
//       });
//   };
//   const current = new Date();
//   const date = `${current.getDate()}/${
//     current.getMonth() + 1
//   }/${current.getFullYear()}`;
//   const Time = `${current.toLocaleTimeString()}`;
//   return (
//     <>
//       <Navbar />
//       <div className="Backg">
//         <div className="Crud">
//           <div className="card text-center">
//             <div className="card-header">
//               <h1>TODO!!!</h1>
//               <div className="input-group mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Type your Task here..."
//                   aria-label="Recipient's username"
//                   aria-describedby="basic-addon2"
//                   value={newTask}
//                   onChange={(e) => setNewtask(e.target.value)}
//                 />
//                 <div className="input-group-append">
//                   <button
//                     type="submit"
//                     className="btn btn-info btn-lg"
//                     onClick={() => submitValue()}
//                   >
//                     Add
//                   </button>
//                 </div>
//               </div>
//               <div className="error">{taskErr}</div>
//             </div>
//           </div>
//         </div>
//         <div className="Table">
//           <div className="card text-center">
//             <div className="card-header">
//               <table className="table table-hover">
//                 <thead>
//                   <tr>
//                     <th scope="col">Id.</th>
//                     <th scope="col">Todo Name</th>
//                     <th scope="col"></th>
//                     <th scope="col">EDIT</th>
//                     <th scope="col">DELETE</th>
//                     <th scope="col">Time</th>
//                     <th scope="col">Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {showMore?newData.map((item, index) => {
//                     return (
//                       <tr key={index}>
//                         <th scope="row">{item.id}</th>
//                         <td>{item?.newTask}</td>
//                         <td>
//                           <label className="switch">
//                             <input
//                               className="switch-input"
//                               type="checkbox"
//                               defaultChecked={item.isCom}
//                               onChange={(e) =>
//                                 handleTask(e.target.checked, item.id)
//                               }
//                             />
//                             <span
//                               className="switch-label"
//                               data-on="Completed"
//                               data-off="Pending"
//                             ></span>
//                             <span className="switch-handle"></span>
//                           </label>
//                         </td>
//                         <td>
//                           <button
//                             type="button"
//                             className="btn btn-secondary"
//                             onClick={(e) => editData(item.id)}
//                           >
//                             Edit
//                           </button>
//                         </td>
//                         <td>
//                           <button
//                             type="button"
//                             className="btn btn-danger"
//                             onClick={() => deleteData(item.id)}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                         <td>{Time}</td>
//                         <td>{date}</td>
//                       </tr>
//                     );
//                   }):data.map((item, index) => {
//                     return (
//                       <tr key={index}>
//                         <th scope="row">{item.id}</th>
//                         <td>{item?.newTask}</td>
//                         <td>
//                           <label className="switch">
//                             <input
//                               className="switch-input"
//                               type="checkbox"
//                               defaultChecked={item.isCom}
//                               onChange={(e) =>
//                                 handleTask(e.target.checked, item.id)
//                               }
//                             />
//                             <span
//                               className="switch-label"
//                               data-on="Completed"
//                               data-off="Pending"
//                             ></span>
//                             <span className="switch-handle"></span>
//                           </label>
//                         </td>
//                         <td>
//                           <button
//                             type="button"
//                             className="btn btn-secondary"
//                             onClick={(e) => editData(item.id)}
//                           >
//                             Edit
//                           </button>
//                         </td>
//                         <td>
//                           <button
//                             type="button"
//                             className="btn btn-danger"
//                             onClick={() => deleteData(item.id)}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                         <td>{Time}</td>
//                         <td>{date}</td>
//                       </tr>
//                   )
//                   })}
//                 </tbody>
//                 <br />
//                 <button type="button" onClick={() => setShowMore(!showMore)} className="btn btn-success">
//                   {showMore ? "View all" : "View Less"}
//                 </button>
//               </table>
//             </div>
//           </div>
//         </div>
//         <br />
//         <br />
//         <br />
//         <br />
//       </div>
//     </>
//   );
// };
// export default Todo;
//✔