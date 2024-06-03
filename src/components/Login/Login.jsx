import React, {useState} from 'react'
import './Login.css'
import cross from '../../assets/cross.png'

const Login = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)}src={cross} alt="" />
            </div>
         <div className='login-popup-inputs'>
            {currState==="Login"?<></>:
            <input type='text' placeholder='your name'required/>}
            <input type='email' placeholder='your email'required/>
            <input type='password' placeholder='password'required/>
         </div>
         <button>{currState==="Sign up"?"create account":"Login"}</button>
         <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>by cjb ekjfncje ejb cej ejfnjehcjd csejse cvejwodn</p>
         </div>
         {currState==="Login"?<p>Create a new account? <span onClick={()=> setCurrState('Sign up')}>click here</span></p>
         :<p>already have an account? <span onClick={()=> setCurrState('Login')}>Login here</span></p>}
        </form>
    </div>
  )
}

export default Login;
