import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function User(props) {
    const user = props.data;

  return (
        <tr>
            <td>{props.id+1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.salary}</td>
            <td>{user.date}</td>
            <td><div className="upper-btn">
          <button ><Link to={"/edituser/"+ (props.id  )}>Edit</Link>

          </button>
          <button onClick={()=>props.dlt(props.id)} className="red">Delete</button>
        </div></td>
          </tr>
  )
}

export default User