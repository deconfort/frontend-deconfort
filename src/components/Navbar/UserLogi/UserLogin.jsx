import React from "react";
import { Link as NavLink } from "react-router-dom";
import "./UserLogin.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import usersActions from "../../../redux/actions/usersActions";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function UserLogin() {
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let [mostrar, setMostrar] = useState(false);
  let dispatch = useDispatch();
  const { signOff } = usersActions;
  const { photo, name, token } = useSelector((state) => state.user);
  let user = useSelector((store) => store.user);
  let navegation = useNavigate()

  let cualquierNombre = () => {
    setMostrar(!mostrar);
    setMostrarOcultar(false);
  };

  function signout() {
    Swal.fire({
      icon: "question",
      title: user.name,
      text: "Would do you like close your session?",
      showConfirmButton: true,
      iconColor: "#5c195d",
      confirmButtonColor: "#5c195d",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navegation(`/`);
        dispatch(signOff(token));
      }
    });
  }

  const noLogged = [
    {
      name: "Sign Up",
      route: "/register",
    },
    {
      name: "Log In",
      route: "/login",
    },
  ];

  return (
    <div className='containerLoginCartandUser'>
      {user.role === "admin" || user.role === "user" && (
        <Link to={'/payments'}>
          <img className="logoCart" src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt="logo cart" />
        </Link>
      )}
      {user.role !== "admin" && user.role !== "user" && (
        <img className="logoCart" src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt="logo cart" onClick={() => {
          Swal.fire({
            icon: "question",
            title: "You must be logged in to access the cart",
            showConfirmButton: true,
            iconColor: "#5c195d",
            confirmButtonColor: "#5c195d",
            confirmButtonText: "Go to Login",
            showCancelButton: true,
          })
            .then((result) => {
              if (result.isConfirmed) {
                navegation(`/login`);
              }
            });
        }} />
      )}
      <div className="containerUserLogin">
        {(user.role === "admin" || user.role === "user") && (
          <h3
            className="bt-nav flex column justify-center align-center g-5 text-black"
            onClick={cualquierNombre}
          >
            <img src={photo} className="photo-user" alt="img-user" />
            {name}
          </h3>
        )}
        {user.role !== "admin" && user.role !== "user" && (
          <h3
            className="bt-nav flex column justify-center align-center g-5"
            onClick={cualquierNombre}
          >
            <img
              src="../images/user.png"
              className="photo-user"
              alt="img-user"
              onClick={cualquierNombre}
            />
          </h3>
        )}
        {mostrar ? (
          <>
            <div className="userLoginNav flex column justify-center align-center p-absolute btnDespl userlogin-position">
              {(user.role === "admin" || user.role === "user") && (
                <>
                  <NavLink to="/profile" className="linkNav style-profile-center">
                    <h3 className="registerStyle Li-Navbar">My Profile</h3>
                  </NavLink>
                  <div to="/login" className="linkNav style-profile-center">
                    <h3 className="registerStyle Li-Navbar" onClick={signout}>
                      Sign Off
                    </h3>
                  </div>
                </>
              )}
              {user.role !== "admin" &&
                user.role !== "user" &&
                noLogged.map((route) => (
                  <NavLink to={route.route} className="linkNav" key={route.name}>
                    <h3 className="registerStyle Li-Navbar">{route.name}</h3>
                  </NavLink>
                ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
