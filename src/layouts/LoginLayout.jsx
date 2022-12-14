import React from 'react'
import LoginForm from '../components/Login/LoginForm'
// import LoginBanner from "../image/LoginBanner.png"
import LoginBanner2 from "../image/LoginBanner2.png"
import '../components/Login/LoginForm.css'

export default function LoginLayout() {
  return (
    <div>
    <img className='loginBanner' src={LoginBanner2} alt="Login banner" />
    <LoginForm></LoginForm>
    </div>
  )
}
