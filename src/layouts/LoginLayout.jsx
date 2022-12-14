import React from 'react'
import LoginForm from '../components/Login/LoginForm'
// import LoginBanner from "../image/LoginBanner.png"
import LoginBanner2 from "../image/LoginBanner2.png"

export default function LoginLayout() {
  return (
    <div>
    <img src={LoginBanner2} alt="" />
    <LoginForm></LoginForm>
    </div>
  )
}
