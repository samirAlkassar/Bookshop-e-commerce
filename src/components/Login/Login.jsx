import React, { useState } from 'react'
import "./login.css"
import ResgisterImage from "../../assets/register.svg"
import LoginImage from "../../assets/login.svg"

const Login = ({closeEvent,login,setLogin}) => {
    
    const toggleLogin = () => {
        setLogin(!login)
    }
  return (
    <div className="login_form_container">
        <div className="login-form-container">

            <button onClick={closeEvent} className='close-loginform-btn'><i class="fa-solid fa-xmark"></i></button>

            { login ? <form action="">
                <h1 className="header">Regester</h1>
                <p>create a new acount and join us.</p>
                <input type="text" placeholder='user name'  />
                <input type="file" id="img" name="img" accept="image/*"/>
                <input type="email" placeholder='username@gmail.com'  />
                <input type="text" placeholder='password'  />
                <input type="text" placeholder='confirm password'  />
                <button type='submit'>Register</button>
                <p>already have an acount? <a onClick={toggleLogin} href="#">Login</a></p>
            </form>:
            <form action="">
                <h1 className="header">Login</h1>
                <p>Login to your account.</p>
                <input type="email" placeholder='username@gmail.com'  />
                <input type="text" placeholder='password'  />
                <button type='submit'>Login</button>
                <p>don't have an acount? <a onClick={toggleLogin} href="#">Register</a></p>
            </form>
            }

            <div className="register_img">
                <img src={login ? ResgisterImage:LoginImage } alt="" />
            </div>

        </div>
    </div>
  )
}

export default Login
