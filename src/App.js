// import './App.css';
import Navbar from "./Components/Navbar";
// import Form from "./Components/Form";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Registration /> } />
        <Route path="/goAgain" element={ <Login /> } />
        <Route path="/goLogin" element={ <Login /> } />
        <Route path="/goBack" element={ <Registration /> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
