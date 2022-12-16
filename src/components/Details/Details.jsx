import React from "react";
import "./details.css";

export default function Details(props) {
  let { category, name, price, photo, description, onClick } = props;



  return (
    <div className="contain-details">
      <div className="nametitle-andsvg">
        <div className="svgs">
          <div>
            {/* <svg
              width="40px"
              height="40px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="var(--ci-primary-color, currentColor)"
                points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"
                class="ci-primary"
              />
              <path
                fill="var(--ci-primary-color, currentColor)"
                d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"
                class="ci-primary"
              />
              <path
                fill="var(--ci-primary-color, currentColor)"
                d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"
                class="ci-primary"
              />
            </svg> */}
          </div>
          {/* <div>Fav</div> */}
        </div>
      </div>
      <div className="contain-info-item">
        <div className="texto">
          <div>
            <h2>{name}</h2>
            <h4>{category}</h4>
          </div>
          <p className="texto-witch">
            {description}
          </p>
          <h6>Price: ${price}</h6>
          <button className="addcart-detail" onClick={onClick}>Add to cart  <svg width="24px" height="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"/><circle cx="10.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></svg></button>
        </div>
        <img
          src={photo}
          className="foto-detail"
          alt="x"
        ></img>
      </div>
    </div>
  );
}
