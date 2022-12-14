import React, { useEffect, useState, useRef } from "react";
import Checkboxes from "../Checkboxes/Checkboxes";
import CardChangeColor from "../CardChangeColor/CardChangeColor";
import "./allProducts.css";
import productAction from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

export default function AllProducts() {
  const dispatch = useDispatch();
  const { getProducts, getProductsFilter } = productAction;
  const { products } = useSelector((state) => state.products);

  let search = useRef();
  let select = useRef();

  useEffect(() => {
    dispatch(getProducts());

    // eslint-disable-next-line
  }, []);

  let filter = () => {
    let text = search.current.value;
    let selectFil = select.current.value;
    console.log(selectFil);
    if (selectFil !== "asc" && selectFil !== "desc") {
      dispatch(getProductsFilter({ order: "", value: text }));
    } else {
      dispatch(getProductsFilter({ order: selectFil, value: text }));
    }
  };

  return (
    <div>
      <div className="container-filters">
        <div className="filter-products">
          <div>
            <label for="site-search">Search the site: </label>
            <input
              type="search"
              id="site-search"
              name="q"
              ref={search}
              onChange={filter}
            />
          </div>
          <select
            name="select"
            className="selects-products"
            onChange={filter}
            ref={select}
          >
            <option value="value1">Select Order</option>
            <option value="asc">Ascend</option>
            <option value="desc">Descend</option>
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
