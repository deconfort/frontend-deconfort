import React from "react";
import Logo from "../components/Navbar/Logo/Logo";
import UserLogin from "../components/Navbar/UserLogi/UserLogin";
import "../components/Navbar/Navbar.css";
import NavbarHambur from "../components/Navbar/Navbar";
import Search from "../components/Navbar/Search/Search";

export default function Header() {
  return (
    <div>
      <div>
        <div className="UserContainer">
            <Logo></Logo>
            <div className="Navbar">
        <NavbarHambur
          title1="HOME"
          title2="PRODUCTS"
          title3="STORES"
          title4="ABOUT US"
          title5="FAQS"
          title6="FORUM"
          title7="CONTACT US"
        ></NavbarHambur>
      </div>
          <UserLogin></UserLogin>
        </div>
      </div>
    </div>
  );
}
