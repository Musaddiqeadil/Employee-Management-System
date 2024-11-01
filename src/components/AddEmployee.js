import React, { useState } from 'react'

function AddEmployee(props) {


  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');      
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}/${month}/${year}`; // Format: dd/mm/yyyy
};
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        salary: "",
        date: getCurrentDate()
    })

   
  
  

    const Submit=()=>{


      if(formData.firstName!="" && formData.lastName!="" && formData.email!="" && formData.salary!=""){

        console.log(props.data)
      props.setData((prev)=>[...prev,formData])

      alert("Data successfully added")
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        salary: "",
        date: getCurrentDate()

      })

        

      }

      else{
        alert("Please fill all requirments")
      }

      

    }




  return (
    <div>
        <form className='form'>
            <input type="Text" placeholder='Enter Your First name' value={formData.firstName} onChange={(e)=>{setFormData((prev)=>({...prev,firstName:e.target.value}))}}/>
            <input type="Text" placeholder='Enter Your Last name' value={formData.lastName} onChange={(e)=>{setFormData((prev)=>({...prev,lastName:e.target.value}))}}/>
            <input type="Text" placeholder='Enter Your Email' value={formData.email} onChange={(e)=>{setFormData((prev)=>({...prev,email:e.target.value}))}}/>
            <input type="Text" placeholder='Enter Your Salary' value={formData.salary} onChange={(e)=>{setFormData((prev)=>({...prev,salary:e.target.value}))}}/>
            
        </form>
        <button className='submit' onClick={Submit}  >Submit</button>
    </div>
  )
}

export default AddEmployee