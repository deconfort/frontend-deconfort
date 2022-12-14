import React from "react";
import "./profile.css";
import local1 from "../../image/local1.jpg";

export default function Profile() {
  return (
    <div className="main-body">
      <div className="containerProfile">
        <div className="wrapper">
          <img className="img-banner-profile" src={local1} alt="" />
          <div className="content">
            <img src={local1} alt="" />
            <h2>
              Matias Rodriguez <span>23</span>
            </h2>
            <p>Buenos Aires, Argentina</p>
            <div className="footer">
              <div>
                <p className="num">10</p>
                <p>My Favorites</p>
              </div>
              <div>
                <p className="num">logo editar</p>
                <p>Edit Profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
