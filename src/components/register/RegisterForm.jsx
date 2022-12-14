import React from 'react'
import './register.css'

export default function RegisterForm() {
  return (
    <div className='containerForm'>
        <h3>Create Account</h3>
        <form className='formRegister'>
            <label className='labelRegister'> Name
                <input className='inputRegister' type="text" placeholder='Name' name='' />
            </label>
            <label className='labelRegister'>Last Name
                <input className='inputRegister' type="text" placeholder='Last Name' name='' />
            </label>
            <label className='labelRegister'>Photo
                <input className='inputRegister' type="text" placeholder='Photo' name='' />
            </label>
            <label className='labelRegister'>Age
                <input className='inputRegister' type="number" placeholder='Age' name="" />
            </label>
            <label className='labelRegister'>Mail
                <input className='inputRegister' type="email" placeholder='Mail' name="" />
            </label>
            <label className='labelRegister'>Password
                <input className='inputRegister' type="password" placeholder='Password' name="" />
            </label>
            <button className="buttonRegister" type="submit">Create</button>
            <p className="registerP">If you already registered</p>
            <button className="buttonRegister" type="submit">
              Sign In
            </button>
        </form>

    </div>
  )
}
