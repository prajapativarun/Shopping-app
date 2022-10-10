import Navbar from "./Components/Navbar";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Table from "./Components/Table/Table";
import Dash from "./Components/Dash";
import File from "./Components/File";
import DragCom from "./Components/DragCom";
import Todo from "./Components/Todo";
import User from "./Components/User";
// import New from "./Components/New";
import Create from "./Components/Table/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./Components/Table/Edit";
import "react-float-menu/dist/react-float-menu.css";
// import { Menu } from "react-float-menu";
function App() {
  var Token = localStorage.getItem("accessToken");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            exact 
            path="/reg" 
            element={<Registration />}
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/" 
            element={Token === null ? <Login /> : <Dash />} 
          />
          <Route
            path="/navbar"
            element={Token === null ? <Login /> : <Navbar />}
          />
          <Route
            path="/table"
            element={Token === null ? <Login /> : <Table />}
          />
          <Route 
            path="/file" 
            element={Token === null ? <Login /> : <File />} 
          />
          <Route
            path="/dragcom"
            element={Token === null ? <Login /> : <DragCom />}
          />
          <Route 
            path="/todo" 
            element={Token === null ? <Login /> : <Todo />} 
          />
          <Route 
            path="/user" 
            element={Token === null ? <Login /> : <User />} 
          />
          {/* <Route 
            path="/new" 
            element={Token === null ? <Login /> : <New />} 
          /> */}
          <Route
            path="/create"
            element={Token === null ? <Login /> : <Create />}
          />
          <Route 
            path="/edit" 
            element={Token === null ? <Login /> : <Edit />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
//  <Menu
//             dimension={60}
//             items={[
//             { name: "Table" },
//             {
//                 children: [
//                 { children: [{ name: "Cut 1" }, { name: "Cut 2" }], name: "Cut" },
//                 { name: "Select All" }
//                 ],
//                 name: "File upload"
//             },
//             { name: "Drag Components" },
//             {
//                 children: [
//                 { name: "Copy from clipboard" },
//                 { name: "Copy selection" }
//                 ],

//                 name: "To-Do List"
//             },
//             { name: "User" },
//             { name: "Logout"}
//             ]}
//             shape="circle"
//             startPosition="top left"
//             width={250}
//             onSelect={(val) => console.log(val)}
//         >
//             <span role="img" aria-label="star">
//             ⭐
//             </span>
//         </Menu>
