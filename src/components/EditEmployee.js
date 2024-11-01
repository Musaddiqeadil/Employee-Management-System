import React, { useEffect } from 'react'
import { useState } from "react";
import { useParams } from 'react-router-dom';

function EditEmployee(props) {

  const { id } = useParams();



  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');      
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }



  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    date: getCurrentDate()


})

useEffect(() => {
  if (props.data && props.data[id]) {
    console.log("Hello");
    console.log(props.data[id]);
    setFormData(props.data[id]);
  }
}, [props.data]);




const onupdate = () =>{

  props.data[id] = formData;
  alert("Data has been successfully updated")

}







  return (
    <div>
          <form className='form'>
            <input type="Text" placeholder='Enter Your First name' value={formData.firstName} onChange={(e)=>{setFormData((prev)=>({...prev,firstName:e.target.value}))}}/>
            <input type="Text" placeholder='Enter Your Last name' value={formData.lastName} onChange={(e)=>{setFormData((prev)=>({...prev,lastName:e.target.value}))}}/>
            <input type="Text" placeholder='Enter Your Email' value={formData.email} onChange={(e)=>{setFormData((prev)=>({...prev,email:e.target.value}))}}/>
            <input type="Text" placeholder='Enter Your Salary' value={formData.salary} onChange={(e)=>{setFormData((prev)=>({...prev,salary:e.target.value}))}}/>
            
        </form>
            <button className='submit' onClick={onupdate}>Update user</button>
    </div>
  )
}

export default EditEmployee