import React from "react";
import "./details.css";
import { useSelector } from "react-redux";
import Favorite from "../Favorite";

export default function Details(props) {
  let { category, name, price, photo, description, onClick, id } = props;
  let { role } = useSelector((state) => state.user);


  return (
    <div className="contain-details">
      <div className="texto">
        <h2>{name}</h2>
        <h4>{category}</h4>
        <p className="texto-witch">
          {description}
        </p>
        <h6>Price: ${price}</h6>
        {role === "user" &&
          <button className="addcart-detail" onClick={onClick}>Add to cart  <svg width="24px" height="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z" /><circle cx="10.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /></svg></button>}
          <div>
            <Favorite productid={id} />
          </div>
      </div>
      <img
        src={photo}
        className="foto-detail"
        alt="x"
      ></img>
    </div>
  );
}
