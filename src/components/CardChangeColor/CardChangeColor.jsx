import React from 'react'
import './cardChangeColor.css'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import Favorite from "../Favorite";
export default function CardChangeColor(props) {
  let { name, photo, price, category, id, onClick, clasess, onClick2 } = props
  const { role } = useSelector((state) => state.user)
  return (
    <div className="card-change-color">
      <div className="bg-watch">
        <h1 className="watch">{category}</h1>
        <div className="cont-reactions">
          <Favorite productid={id} />
        </div>
        <img src={photo} alt="watch" className="watch-img show imgCont" />
      </div>
      <div className="info">
        <div className="watch-name">
          <h1 className="title-name">{name}</h1>
          <h3 className="h3-color">$ {price}</h3>
        </div>
        <div className="color-container">
          <NavLink className="linkNav" to={`/products/${id}`}>
            <span className='more-and-buy icon-cart'>More info</span>
          </NavLink>
          {role === "admin" ? (
            <>
              <button className='more-and-buy icon-cart list-style-none-cardChange' onClick={onClick2}>Delete</button>
              <NavLink
                to={`/editproduct/${id}`}
                className="more-and-buy icon-cart list-style-none-cardChange"
              >
                Edit
              </NavLink>
            </>
          ) : null}
          {role !== "admin" ? (
            <span className={clasess} onClick={onClick}>Add to cart  <svg width="24px" height="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z" /><circle cx="10.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /></svg></span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
