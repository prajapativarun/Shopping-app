import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Table = () => {
  const [newData, setNewData] = useState([]);
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pageVisited = pageNumber * usersPerPage;
  const displayUsers = newData
    .slice(pageVisited, pageVisited + usersPerPage)
    .map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.Id}</th>
          <td>{item.FirstName}</td>
          <td>{item.LastName}</td>
          <td>{item.Email}</td>
          <td>{item.PhoneNo}</td>
          <td>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => update(item.Id)}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteData(item.Id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  const pageCount = Math.ceil(newData.length / usersPerPage);
  useEffect(() => {
    getData();
    localStorage.removeItem("id");
  }, []);
  const update = (id) => {
    navigate(`/edit`);
    localStorage.setItem("id", id);
  };
  const getData = () => {
    axios
      .get("https://632ae4cd1090510116cb07ce.mockapi.io/crud")
      .then((response) => {
        console.log("==>>", response.data);
        setNewData(response.data);
      });
  };
  const deleteData = (id) => {
    axios
      .delete(`https://632ae4cd1090510116cb07ce.mockapi.io/crud/${id}`)
      .then(function (response) {
        console.log("deleted");
        getData();
      });
  };
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <Navbar />
      <div className="Backg">
        <div className="Crud">
          <div className="card text-center">
            <div className="card-header">
              <h1>HOla Amigos!</h1>
              <button type="button" className="btn btn-info">
                <Link to="/create">Create</Link>
              </button>
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
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                    <th scope="col">PhoneNo.</th>
                    <th scope="col">EDIT</th>
                    <th scope="col">DELETE</th>
                  </tr>
                </thead>
                <tbody>{displayUsers}</tbody>
              </table>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={changePage}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
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
export default Table;
// newData?.map((item,index)=>{
//     return(
// <tr key={index}>
// <th scope="row">{item.Id}</th>
// <td>{item.FirstName}</td>
// <td>{item.LastName}</td>
// <td>{item.Email}</td>
// <td>{item.PhoneNo}</td>
// <td><button type="button" className='btn btn-danger' onClick={() => deleteData(item.Id)}>Delete</button></td>
// <td><button type="button" className='btn btn-secondary' onClick={() => update(item.Id)}>Edit</button></td>
// </tr>
// )
// })
