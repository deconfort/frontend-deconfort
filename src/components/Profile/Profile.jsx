import React from "react";
import "./profile.css";
import local1 from "../../image/local1.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import usersAction from "../../redux/actions/usersActions";
import { Link as NavLink } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const { idUser, user } = useSelector((state) => state.user);

  const { getUser } = usersAction;

  useEffect(() => {
    dispatch(getUser(idUser));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="main-body">
      <div className="containerProfile">
        <div className="wrapper">
          <img className="img-banner-profile" src={local1} alt="Banner profile" />
          <div className="content">
            <img className="photo-user" src={user.photo} alt="user" />
            <h2>
              {user.name} {user.lastName}<span>, {user.age}</span>
            </h2>
            <p>{user.country}</p>
            <p>{user.mail}</p>
            <div className="footer">
              <NavLink to="/myfavs" className="linkNav">
                <div>
                  <p className="num">🤍</p>
                  <p>My Favourites</p>
                </div>
              </NavLink>
              <NavLink to="/editprofile" className="linkNav">
                <div>
                  <p className="num">📝</p>
                  <p>Edit Profile</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
