import React, { useRef, useEffect, useState } from "react";
import CardChangeColor from "../CardChangeColor/CardChangeColor";
import axios from "axios";
import apiUrl from "../../url";
import "./ProductCategory.css"
import { useParams } from "react-router-dom";

export default function ProductCategory() {
    let { category } = useParams();
  let [products, setProducts] = useState([]);
  console.log(category);

  useEffect(() => {
    axios
      .get(`${apiUrl}api/products?category=desks`)
      .then((res) => setProducts(res.data.response));
  }, []);


  return (
    <div className="cards-all-products">
      {products?.map((item) => {
        return (
          <CardChangeColor
            name={item.name}
            photo={item.photo}
            category={item.category}
            price={item.price}
            id={item._id}
            key={item._id}
          />
        );
      })}
    </div>
  );
}
