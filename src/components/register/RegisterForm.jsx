import React from "react";
import "./register.css";
import { Link as NavLink } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../../url";
import bannerRegister from '../../image/banerRegister.png'

export default function RegisterForm(props) {
  let { role } = props;
  let name = useRef();
  let lastName = useRef();
  let photo = useRef();
  let age = useRef();
  let mail = useRef();
  let password = useRef();
  let country = useRef();
  let form = useRef();

  async function newUser(event) {
    event.preventDefault();

    let newUser = {
      name: name.current.value,
      lastName: lastName.current.value,
      role: "user",
      photo: photo.current.value,
      age: age.current.value,
      mail: mail.current.value,
      country: country.current.value,
      password: password.current.value,
      // confirmPassword: confirmPassword.current.value,
    };
    console.log(newUser);
    try {
      let res = await axios.post(`${apiUrl}api/auth/sign-up`, newUser);
      console.log(res);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          text: `Deconfort sent a notification to your email ${newUser.mail}, open the Gmail app and tap Verify my account prompt to verify its you`,
          showConfirmButton: true,
          iconColor: "#5c195d",
          confirmButtonColor: "#5c195d",
        });
        form.current.reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        confirmButtonColor: "#5c195d",
        iconColor: "#5c195d",
        title: error.response.data.message,
        showConfirmButton: true,
      });
    }
  }

  return (
    <div className="containerFormRegister">
      <img className="registerBanner" src={bannerRegister} alt="Banner Register" />
      <h3 className="tittleRegisterForm">Create Account</h3>
      <form className="formRegister" onSubmit={newUser} ref={form}>
        <label className="labelRegister">
          {" "}
          Name
          <input
            className="inputRegister"
            type="text"
            placeholder="Name"
            name="name"
            ref={name}
          />
        </label>
        <label className="labelRegister">
          Last Name
          <input
            className="inputRegister"
            type="text"
            placeholder="Last Name"
            name="lastName"
            ref={lastName}
          />
        </label>
        <label className="labelRegister">
          Photo
          <input
            className="inputRegister"
            type="text"
            placeholder="Photo"
            name="photo"
            ref={photo}
          />
        </label>
        <label className="labelRegister">
          Age
          <input
            className="inputRegister"
            type="number"
            placeholder="Age"
            name="age"
            ref={age}
          />
        </label>
        <label className="labelRegister">
          Country
          <input
            className="inputRegister"
            type="text"
            placeholder="Country"
            name="country"
            ref={country}
          />
        </label>
        <label className="labelRegister">
          Mail
          <input
            className="inputRegister"
            type="email"
            placeholder="Mail"
            name="mail"
            ref={mail}
          />
        </label>
        <label className="labelRegister">
          Password
          <input
            className="inputRegister"
            type="password"
            placeholder="Password"
            name="password"
            ref={password}
          />
        </label>
        <button className="buttonRegisterForm" type="submit">
          Create
        </button>
        <p className="registerP">If you already registered</p>

        <NavLink to="/login" className="linkNav">
          <button className="buttonRegisterForm" type="submit">
            Sign In
          </button>
        </NavLink>
      </form>
    </div>
  );
}
