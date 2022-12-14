import React from 'react'
import { Link } from "react-router-dom";
import "./UserLogin.css"

export default function UserLogin() {
  return (
    <div>
        <li className='registerStyle Li-Navbar'><Link to={"/register"}>Register</Link></li>
        <li className='registerStyle Li-Navbar'><Link to={"/login"}>Login</Link></li>
    </div>
  )
}
