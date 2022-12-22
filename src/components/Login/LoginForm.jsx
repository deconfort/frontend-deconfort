import React from "react";
import "./LoginForm.css";
import { Link as NavLink } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import usersActions from "../../redux/actions/usersActions";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  let mail = useRef();
  let dispatch = useDispatch()
  let { enter } = usersActions
  let password = useRef();
  let form = useRef();
  let navegation = useNavigate()


  async function submitLogin(event) {
    event.preventDefault();
    let datos = {
      mail: mail.current.value,
      password: password.current.value,
    };
    try {
      let res = await dispatch(enter(datos));
      if (res.payload.success) {
        Swal.fire({
          icon: "success",
          title: res.payload.res.message,
          showConfirmButton: true,
          iconColor: "#5c195d",
          confirmButtonColor: "#5c195d",
        }).then((result) => {
          if (result.isConfirmed) {
            navegation(`/`);
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#5c195d",
          iconColor: "#5c195d",
          title: res.payload.response,
          showConfirmButton: true,
        });

      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="containerLogin">
        <form className="formLogin" onSubmit={submitLogin} ref={form}>
          <label className="labelLogin">
            Mail
            <input
              className="inputLogin"
              type="mail"
              autoComplete="current-mail"
              placeholder="Mail"
              ref={mail}
            />
          </label>
          <label className="labelLogin">
            Password
            <input
              className="inputLogin"
              type="password"
              autoComplete="on"
              placeholder="Password"
              ref={password}
            />
          </label>
          <div className="contenedorByP">
            <button className="buttonLoginForm center-center" type="submit">
              Sign In
            </button>
            <p className="text-center">Don't you have an account yet?</p>
            <NavLink to="/register" className="linkNav">
              <button className="buttonLoginForm">Sign Up</button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
