import React, { useRef, useEffect, useState } from "react";
import CardChangeColor from "../CardChangeColor/CardChangeColor";
import axios from "axios";
import apiUrl from "../../url";
import "../ProductCategory/ProductCategory"
import { useParams } from "react-router-dom";

export default function ProductCategory() {
  let [products, setProducts] = useState([]);


  useEffect(() => {
    axios
      .get(`${apiUrl}api/products?category=tables`)
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