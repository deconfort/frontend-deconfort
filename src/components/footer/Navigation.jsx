import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Navegacion() {
  return (
    <div>
      <h3 className="tittleFooter">Navigation</h3>
      <Link className="linksFooter" to='/faqs'>
        <p className="subttitleNavigation">Faqs</p>
      </Link>
      <Link className="linksFooter" to='/contact'>
        <p className="subttitleNavigation">Contact</p>
      </Link>
      <Link className="linksFooter" to='/locals'>
        <p className="subttitleNavigation">Shops</p>
      </Link>
      <Link className="linksFooter" to='/aboutus'>
        <p className="subttitleNavigation">About us</p>
      </Link>
    </div>
  );
}
