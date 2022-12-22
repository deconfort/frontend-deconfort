import React from "react";
import decomfortLogo from "../../../image/decomfortLogo.png"
import logoDeconfort from '../../../image/logoDeconfort.png'
import "./Logo.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="containerLogo">
      <Link to='/'>
        <img className="LogoSize" src={logoDeconfort} alt="Decomfort Logo" />
      </Link>
    </div>
  );
}
