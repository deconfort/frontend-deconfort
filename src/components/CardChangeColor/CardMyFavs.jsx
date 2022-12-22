import React from "react";
import "./CardEdit.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function CardMyFavs(props) {
  let { product, onClick, name, id } = props;
  const { role } = useSelector((state) => state.user)
  console.log(product);

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
        </div>
      </div>
    </div>
  )
}
