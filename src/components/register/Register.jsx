import React, { useState } from 'react'

export default function Register() {
    let [userData,serUserData]= useState({
        name:"",
        email:"",
        userName:"",
        password:"",
        rePassword:"",
    });
  let [error,serError]= useState({
    nameErr:"",
    emailErr:"",
    userNameErr:"",
    passwordErr:"",
    rePasswordErr:"",    
    });

    function handleChange(e){
        console.log(e);     
let emailRegix=new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')
let userNameRegix=new RegExp('^[a-z0-9_-]{3,15}$')
 if(e.target.name=='name')
    {
        serUserData({
            ...userData,
            name:e.target.value
        })
        serError({
            ...error,
            nameErr:e.target.value.length==0?"name is required":e.target.value.length<10?"minimum char is 10":""
        })  
       
}else if(e.target.name=='email')
{
    serUserData({
        ...userData,
        email:e.target.value
    })
    serError({
        ...error,
        emailErr:e.target.value.length==0?"email is required":!emailRegix.test(e.target.value)?"email not valid":""
    })  
   
}else if(e.target.name=='userName')
    {
        serUserData({
            ...userData,
            userName:e.target.value
        })
        serError({
            ...error,
            userNameErr:e.target.value.length==0?"userName is required":!userNameRegix.test(e.target.value)?"invalid user name":""
        })  
       
}else if(e.target.name=='password'){
    serUserData({
        ...userData,
        password:e.target.value
    })
    serError({
        ...error,
        passwordErr:e.target.value.length==0?"password is required":e.target.value.length<6?"minimun legth is 6":""
    })
}else if(e.target.name=='rePassword'){
    serUserData({
        ...userData,
        rePassword:e.target.value
    })
    serError({
        ...error,
        rePasswordErr:e.target.value.length==0?"rePassword is required":e.target.value!=userData.password?"password not match":""
    })
}else{
    return false
}
    }

    function handleSubmit(e){
if(!error.nameErr &&!error.emailErr &&!error.userNameErr &&!error.passwordErr && !error.rePasswordErr)
{
    e.preventDefault();
    console.log(userData);
    console.log(e);
    
}
    }
  return (
    <>
    <h2 className='title text-center mt-2' >Register Form</h2>
    <div className="container">
    <form className='w-75 m-auto mt-3' onSubmit={handleSubmit}>

  <div className="form-floating mb-3">
    <input type="text" value={userData.name} name="name" onChange={handleChange} className={`form-control ${error.nameErr?'is-invalid':''}`} id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput">name</label>
  {error.nameErr!=''?<p className='text-danger my-1'>{error.nameErr}</p>:''}
  </div>
  <div className="form-floating mb-3">
    <input type="email" value={userData.email} name="email" onChange={handleChange} className={`form-control ${error.emailErr?'is-invalid':''}`} id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput">Email address</label>
  {error.emailErr!=''?<p className='text-danger my-1'>{error.emailErr}</p>:''}
  </div>
  <div className="form-floating mb-3">
    <input type="text" value={userData.userName} name="userName" onChange={handleChange} className={`form-control ${error.userNameErr?'is-invalid':''}`} id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput">User Name</label>
  {error.userNameErr!=''?<p className='text-danger my-1'>{error.userNameErr}</p>:''}
  </div>

  <div className="form-floating mb-3">
    <input type="password"  value={userData.password} name="password" onChange={handleChange}  className="form-control"  id="floatingPassword" placeholder="Password" />
    <label htmlFor="floatingPassword">Password</label>
    {error.passwordErr!=''?<p className='text-danger my-1'>{error.passwordErr}</p>:''}
  </div>

  <div className="form-floating">
    <input type="password"  value={userData.rePassword} name="rePassword" onChange={handleChange}  className="form-control"  id="floatingPassword" placeholder="Password" />
    <label htmlFor="floatingPassword">rePassword</label>
    {error.rePasswordErr!=''?<p className='text-danger my-1'>{error.rePasswordErr}</p>:''}
  </div>

  <button type='submit' className='btn btn-success mt-2 ms-auto d-block'>Submit</button>
</form>


    </div>


    </>
  )
}

