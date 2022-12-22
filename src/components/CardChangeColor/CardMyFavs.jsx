import React from "react";
import "./CardEdit.css";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function CardMyFavs(props) {
  let { product, onClick, name, id, clasess, onClick2 } = props;
  const { role } = useSelector((state) => state.user)

  return (
    <div className="card-change-color">
      <div className="bg-watch">
        <h1 className="watch">{product.category}</h1>
        <img src={product.photo} alt="watch" className="watch-img show imgCont" />
      </div>
      <div className="info">
        <div className="watch-name">
          <h1 className="title-name">{product.name}</h1>
          <h3 className="h3-color">$ {product.price}</h3>
        </div>
        <div className="color-container">
          <NavLink className="linkNav" to={`/products/${product._id}`}>
            <span className='more-and-buy icon-cart'>More info</span>
          </NavLink>
          <button
            className="more-and-buy icon-cart"
            name={name}
            id={id}
            onClick={onClick}
          >
            Delete
          </button>
          <span className={clasess} onClick={onClick2}>Add to cart  <svg width="24px" height="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z" /><circle cx="10.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /></svg></span>
        </div>
      </div>
    </div>
  )
}
