import React, {useState} from 'react'

const Register = () => {
    const [fullname, setFullname]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const onchangename=(e)=>{
        setFullname(e.target.value)
    }

    const onchangeemail=(e)=>{
        setEmail(e.target.value)
    }

    const onchangepass=(e)=>{
        setPassword(e.target.value)
    }

    const onformsubmit=(e)=>{
        e.prevetDefault() // this will not refresh the page
        console.log({fullname,email, password})
    }

  return (
    <div>
        <h1>Register Form</h1>
        <form onSubmit={onformsubmit}> 
            <div>
                <input onChange={onchangename} placeholder='fullname' type='text' value={fullname}/>         
            </div>
            
            
            <div>
                <input onChange={onchangeemail} placeholder='Email' type='email' value={email}/>          
            </div>
            

            <div>
                <input onChange={onchangepass} placeholder='Password' type='password' value={password}/>         
            </div>
            
            <button type='submit'>Register</button>
        </form>
    </div>
    
  )
}

export default Register;
