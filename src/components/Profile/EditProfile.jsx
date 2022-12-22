import React, { useRef } from "react";
import "./profile.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usersAction from "../../redux/actions/usersActions";
import { Link as NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export default function Profile() {
  const dispatch = useDispatch();
  const { idUser, user } = useSelector((state) => state.user);
  const { getUser, editProfile } = usersAction;

  useEffect(() => {
    dispatch(getUser(idUser));
    // eslint-disable-next-line
  }, []);

  let information = useRef();
  let name = useRef();
  let lastName = useRef();
  let photo = useRef();
  let age = useRef();
  let mail = useRef();
  let country = useRef();
  async function editUser(event) {
    event.preventDefault();
    let editUser = {
      name: name.current.value,
      lastName: lastName.current.value,
      photo: photo.current.value,
      age: age.current.value,
      mail: mail.current.value,
      country: country.current.value,
    };

    Swal.fire({
      icon: "question",
      title: " Do you want to save the changes?",
      showConfirmButton: true,
      iconColor: "#5c195d",
      confirmButtonColor: "#5c195d",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          let data = {
            id: idUser,
            edit: editUser,
          };
          dispatch(editProfile(data));
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  return (
    <div className="main-body">
      <div className="containerProfile">
        <div className="wrapper">
          <img className="img-banner-profile" src={user.photo} alt="Banner Profile" />
          <div className="content ">
            <img className="photo-user" src={user.photo} alt="user" />
            <form
              className="flex justify-center column align-center"
              onSubmit={editUser}
              ref={information}
            >
              <label className="labelProfile">
                Name
                <input
                  defaultValue={user.name}
                  className="inputRegister"
                  type="text"
                  placeholder="Name"
                  name="name"
                  ref={name}
                />
              </label>
              <label className="labelProfile">
                LastName
                <input
                  defaultValue={user.lastName}
                  className="inputRegister"
                  type="text"
                  placeholder="LastName"
                  id="name"
                  name="lastName"
                  ref={lastName}
                />
              </label>
              <label className="labelProfile">
                Age
                <input
                  defaultValue={user.age}
                  className="inputRegister"
                  type="text"
                  placeholder="Age"
                  ref={age}
                  name="age"
                />
              </label>
              <label className="labelProfile">
                Photo
                <input
                  defaultValue={user.photo}
                  id="photo"
                  ref={photo}
                  className="inputRegister"
                  type="text"
                  placeholder="Insert photo URL"
                  name=""
                />
              </label>
              <label className="labelProfile">
                Country
                <input
                  className="inputRegister"
                  defaultValue={user.country}
                  type="text"
                  ref={country}
                  placeholder="Country"
                  name="mail"
                />
              </label>
              <label className="labelProfile">
                Email
                <input
                  className="inputRegister"
                  defaultValue={user.mail}
                  type="text"
                  ref={mail}
                  placeholder="Insert your email"
                  name="mail"
                />
              </label>
              <button className="buttonRegister" type="submit">
                Edit Profile
              </button>
            </form>
            <div className="footer">
              <NavLink to="/profile" className="linkNav">
                <div>
                  <p>Back to profile</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
