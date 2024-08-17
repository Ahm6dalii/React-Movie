import React, { useState } from 'react'

export default function Login() {
  let [userData,serUserData]= useState({
        email:"",
        password:""
    });
  let [error,serError]= useState({
        emailErr:"",
        passwordErr:""
    });

    function handleChange(e){
        console.log(e);
        
let emailRegix=new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')
if(e.target.name=='email')
{
    serUserData({
        ...userData,
        email:e.target.value
    })
    serError({
        ...error,
        emailErr:e.target.value.length==0?"email is required":!emailRegix.test(e.target.value)?"email not valid":""
    })  
   
}else{
    serUserData({
        ...userData,
        password:e.target.value
    })
    serError({
        ...error,
        passwordErr:e.target.value.length==0?"password is required":e.target.value.length<6?"minimun legth is 6":""
    })
}
    }

    function handleSubmit(e){
if(!error.emailErr && !error.passwordErr)
{
    e.preventDefault();
    console.log(userData);
    console.log(e);
    
}
    }
  return (
    <>
    <h2 className='text-success text-center mt-4' >Login Form</h2>
    <div className="container">
    <form className='w-75 m-auto mt-3' onSubmit={handleSubmit}>
  <div className="form-floating mb-3">
    <input type="email" value={userData.email} name="email" onChange={handleChange} className={`form-control ${error.emailErr?'is-invalid':''}`} id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput">Email address</label>
  {error.emailErr!=''?<p className='text-danger my-1'>{error.emailErr}</p>:''}
  </div>
  <div className="form-floating">
    <input type="password"  value={userData.password} name="password" onChange={handleChange}  className="form-control"  id="floatingPassword" placeholder="Password" />
    <label htmlFor="floatingPassword">Password</label>
    {error.passwordErr!=''?<p className='text-danger my-1'>{error.passwordErr}</p>:''}

  </div>
  <button type='submit' className='btn btn-success mt-2 ms-auto d-block'>Submit</button>
</form>
    </div>



    </>
  )
}
