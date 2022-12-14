import React, { useEffect, useState, useRef } from "react";
import Checkboxes from "../Checkboxes/Checkboxes";
import CardChangeColor from "../CardChangeColor/CardChangeColor";
import "./allProducts.css";
import productAction from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

export default function AllProducts() {
  const dispatch = useDispatch();
  const { getProducts, getProductFilter } = productAction;
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  console.log(products);

  return (
    <div>
      <div className="container-filters">
        <div className="filter-products">
          <div>
            <label for="site-search">Search the site: </label>
            <input type="search" id="site-search" name="q" />
          </div>
          <select name="select" className="selects-products">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
      </div>
      <div className="check-filter-cards">
        <Checkboxes />
        <div className="cards-all-products">
          {products?.map((item) => {
            return (
              <CardChangeColor
                name={item.name}
                photo={item.photo[0]}
                category={item.category}
                price={item.price}

              />
            );
          })}
            </div>

        </div>
      </div>
  );
}
