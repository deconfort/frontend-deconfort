import React, { useEffect, useRef } from "react";
import CardChangeColor from "../CardChangeColor/CardChangeColor";
import "./allProducts.css";
import productAction from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import apiUrl from "../../api/url";
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";


export default function AllProducts() {
  const { idUser, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { getProducts, getProductsFilter } = productAction;
  const { products } = useSelector((state) => state.products);
  const {role} = useSelector((state) => state.user)

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
            className="inputSearch"
            placeholder="search your product"
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
      {role === "admin" ? (
        <div className="buttonNewProduct"> 
        <Link to='/createproduct'>
          <button className="more-and-buy">New product</button>
        </Link>
        </div>
          ) : null}      
      <div className="check-filter-cards">
        {/* <Checkboxes /> */}
        <div className="cards-all-products">
          {products?.map((item) => {
            async function addToCart() {
              let product = {
                name: item.name,
                photo: item.photo[0],
                price: item.price,
                productId: item._id,
                userId: idUser,
              };
              console.log(product);
              try {
                let res = await axios.post(`${apiUrl}api/shopping`, product);
                console.log(res);
                if(res.data.success){
                  Swal.fire({
                    icon: "warning",
                    confirmButtonColor: "#5c195d",
                    iconColor: "#5c195d",
                    title: res.data.message,
                    showConfirmButton: true,
                  });
                }
                  
                console.log(res);
              } catch (error) {
                Swal.fire({
                  icon: "warning",
                  confirmButtonColor: "#5c195d",
                  iconColor: "#5c195d",
                  title: error.response.data.message,
                  showConfirmButton: true,
                });
              
                console.log(error);
              }
            }
            return (
              <CardChangeColor
                onClick={() => {
                  if (token) {
                    addToCart();
                  } else {
                    Swal.fire({
                      icon: "warning",
                      confirmButtonColor: "#5c195d",
                      iconColor: "#5c195d",
                      title: "You have to registered to add this product to your cart",
                      showConfirmButton: true,
                    });
                  }
                }}
                name={item.name}
                photo={item.photo[0]}
                category={item.category}
                price={item.price}
                id={item._id}
                key={item._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
