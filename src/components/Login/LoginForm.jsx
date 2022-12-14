import React from "react";
import "./LoginForm.css";

export default function LoginForm() {
  return (
    <>
      <div className="containerLogin">
        <form className="formLogin">
          <label className="labelLogin">
            Mail
            <input
              className="inputLogin"
              type="mail"
              autoComplete="current-mail"
              placeholder="Mail"
            />
          </label>
          <label className="labelLogin">
            Password
            <input
              className="inputLogin"
              type="password"
              autoComplete="on"
              placeholder="Password"
            />
          </label>
          <div className="contenedorByP">
            <button className="buttonLoginForm center-center" type="submit">
              Sign In
            </button>
            <p className="text-center">Or with. If you are not registered</p>
            <button className="buttonLoginForm">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
}
