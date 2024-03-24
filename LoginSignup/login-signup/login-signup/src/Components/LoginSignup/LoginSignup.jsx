import React from 'react'
import './LoginSignup.css'
import ojito from '../Assets/ojito.jpg'
import { useState } from 'react'

const LoginSignup = () => {

    const [action, setAction] = useState("Log In");
  return (
    <div className = "container">
        <div className = "header">
            <div className ='text'>{action}</div>
            <div className ='underline'></div>
        </div>
        <div className = 'inputs'>
            {action === "Log In" ? <div></div>:<div className = 'input'>
                <img src ="" alt=""/>
                <input type ="Email" placeholder='Email'/></div>
            }
            <div className = 'input'>
                <img src ="" alt=""/>
                <input type ="Username" placeholder='Username'/></div>
            
            <div className = 'input'>
                <input type ="password" placeholder='Password'/>
                <img src ={ojito} alt=""/></div>

            {action ==="Log In" ? <div></div>:<div className = 'input'>
            <input type ="password" placeholder='Confirm Password'/>
            <img src ={ojito} alt=""/></div>}
            
            {action ==="Sign Up" ? <div></div>:<div className="forgot-password">Forgot Password? <span> Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action == "Log In" ? "submit gray": "submit"}onClick={()=> {setAction("Sign Up")}}>Sign Up </div>
                <div className={action == "Sign Up" ? "submit gray": "submit"}onClick={()=>{setAction("Log In")}}>Log In</div>
            </div>
            </div>
        </div>

  )
}
export default LoginSignup
