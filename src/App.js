import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AllUsers from "./components/AllUsers";
import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";
import { useState } from "react";

function App() {

  const [data, setData] = useState([
    {
      firstName: "Mouzzam",
      lastName: "Danish",
      email: "mouzzamdanishh@gmail.com",
      salary: "90",
      date: "12-20-20"
    }
    
  ])





  return (
    <div>
      <BrowserRouter>
        <h1>Employee Management Software</h1>
        <div className="upper-btn">
         
          <button className="yellow">
            <Link to="/">All users</Link>
          </button>
          <button className="green">
            <Link to="/adduser">Add Employee</Link>
          </button>
        </div>
        <br />

        <Routes>
          <Route index element={<AllUsers data={data} setData={setData}/>} />
          <Route path="adduser" element={<AddEmployee data={data} setData={setData}/>} />
          <Route path="edituser/:id" element={<EditEmployee data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
