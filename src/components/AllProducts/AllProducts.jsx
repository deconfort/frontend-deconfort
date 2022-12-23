import React, { useEffect, useRef, useState } from "react";
import CardChangeColor from "../CardChangeColor/CardChangeColor";
import "./allProducts.css";
import "../FilterProducts/filterProducts.css";
import productAction from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import apiUrl from "../../url";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CardNotFound from "../CardChangeColor/CardNotFound/CardNotFound";

export default function AllProducts() {
  let navegation = useNavigate();
  const { idUser, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { getProducts, getProductsFilter } = productAction;
  const { products } = useSelector((state) => state.products);
  const { role } = useSelector((state) => state.user);
  const [cartProduct, setCartProduct] = useState([]);
  const [reload, setReload] = useState(false);

  let search = useRef();
  let select = useRef();

  useEffect(() => {
    dispatch(getProducts());
    getCartProduct();
    // eslint-disable-next-line
  }, [reload]);

  async function getCartProduct() {
    try {
      let res = await axios.get(`${apiUrl}api/shopping?userId=${idUser}`);
      setCartProduct(res.data.productsCart);
    } catch (error) { }
  }

  async function deleteProduct(id) {
    try {
      let res = await axios.delete(`${apiUrl}api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      if (res.data.success) {
        deleteFavs(id)
        Swal.fire({
          icon: "success",
          confirmButtonColor: "#5c195d",
          iconColor: "#5c195d",
          title: res.data.message,
          showConfirmButton: true,
        });
        setReload(!reload);
      }
    } catch (error) {
      Swal.fire({
        icon: "warning",
        confirmButtonColor: "#5c195d",
        iconColor: "#5c195d",
        title: "You must be the creator of this product to delete it",
        showConfirmButton: true,
      });
      console.log(error);
    }
  }

  async function deleteFavs(id) {
    console.log(id)
    try {
      let res = await axios.put(`${apiUrl}api/favs/delete/${id}`)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

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
          <Link to="/createproduct">
            <button className="more-and-buy">New product</button>
          </Link>
        </div>
      ) : null}
      <div className="check-filter-cards">
        {/* <Checkboxes /> */}
        <div className="cards-all-products">
          {products.length > 0 ? (products?.map((item) => {
            async function addToCart() {
              let product = {
                name: item.name,
                photo: item.photo[0],
                price: item.price,
                productId: item._id,
                userId: idUser,
              };
              try {
                let res = await axios.post(`${apiUrl}api/shopping`, product);
                if (res.data.success) {
                  Swal.fire({
                    icon: "success",
                    confirmButtonColor: "#5c195d",
                    iconColor: "#5c195d",
                    title: res.data.message,
                    showConfirmButton: true,
                  });
                  setReload(!reload);
                }
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
            let cart = cartProduct.find((cart) => cart.productId._id === item._id);
            return (
              <CardChangeColor
                onClick={() => {
                  if (token) {
                    if (item.stock > 0) {
                      addToCart();
                    } else {
                      Swal.fire({
                        icon: "warning",
                        confirmButtonColor: "#5c195d",
                        iconColor: "#5c195d",
                        title:
                          "At the moment we do not have stock of this product",
                        showConfirmButton: true,
                      });
                    }
                  } else {
                    Swal.fire({
                      icon: "warning",
                      confirmButtonColor: "#5c195d",
                      iconColor: "#5c195d",
                      title:
                        "You have to registered to add this product to your cart",
                      showConfirmButton: true,
                      confirmButtonText: "Go to Login",
                      showCancelButton: true,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        navegation(`/login`);
                      }
                    });
                  }
                }}
                clasess={
                  cart ? "more-and-buy-off icon-cart" : "more-and-buy icon-cart"
                }
                onClick2={() => {
                  deleteProduct(item._id);
                }}
                name={item.name}
                photo={item.photo[0]}
                category={item.category}
                price={item.price}
                id={item._id}
                key={item._id}
              />
            );
          })) : <CardNotFound />

          }
        </div>
      </div>
    </div>
  );
}
