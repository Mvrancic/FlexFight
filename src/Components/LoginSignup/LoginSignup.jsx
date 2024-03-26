import React from 'react'
import './LoginSignup.css'
import ojito from '../Assets/ojito2.png'
import { useState } from 'react'

const LoginSignup = () => {
    const [name, setName] = useState('')
    const [password,setPassword] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const user = {name,password}
        console.log(user)
        fetch("http://localhost:8080/users/add",{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(user)
        }).then(()=>{
            console.log("new user added")
        })

    }
    const [action, setAction] = useState("Log In");
  return (
    <div className = "container">
        <div className = "header">
            <div className ='text'>{action}</div>
            <div className ='underline'></div>
        </div>
        <div className = 'inputs'>
            {action === "Log In" ? <div></div>:<div className = 'input'>
                
                <input type ="Email" placeholder='Email'/></div>
            }
            <div className = 'input'>
                
                <input type ="Username" placeholder='Username'onChange={(e)=>setName(e.target.value)}/></div>
            
            <div className = 'input'>
                <input type ="password" placeholder='Password'onChange={(e)=>setPassword(e.target.value)}/>
                <img src ={ojito} alt=""/></div>

            {action ==="Log In" ? <div></div>:<div className = 'input'>
            <input type ="password" placeholder='Confirm Password'/>
            <img src ={ojito} alt=""/></div>}
            
            {action ==="Sign Up" ? <div></div>:<div className="forgot-password">Forgot Password? <span> Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action === "Log In" ? "submit gray": "submit"} onClick={()=> {setAction("Sign Up")} }>Sign Up </div>
                <div className={action === "Sign Up" ? "submit gray": "submit"}onClick={()=>{setAction("Log In")}}>Log In</div>
                <button type="button" className="btn btn-secondary" onClick={handleClick}>Submit</button>
            </div>
            </div>
        </div>

  )
}
export default LoginSignup
