import React from "react";
import decomfortLogo from "../../../image/decomfortLogo.png"
import "./Logo.css";

export default function Logo() {
  return (
    <div className="">
      <img className="LogoSize" src={decomfortLogo} alt="Decomfort Logo"/>
    </div>
  );
}
