import React, { useEffect, useState } from "react";
import CardChangeColor from "../CardChangeColor/CardChangeColor";
import axios from "axios";
import apiUrl from "../../url";
import "../ProductCategory/ProductCategory"
import { useSelector } from "react-redux";
import Swal from "sweetalert2";


export default function ProductCategory() {
  const { idUser, token } = useSelector((state) => state.user);
  let [products, setProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get(`${apiUrl}api/products?category=vases`)
      .then((res) => setProducts(res.data.response));
  }, []);

  useEffect(() => {
    getCartProduct();
    // eslint-disable-next-line
  }, [reload]);

  async function getCartProduct() {
    try {
      let res = await axios.get(`${apiUrl}api/shopping?userId=${idUser}`);
      setCartProduct(res.data.productsCart);
    } catch (error) {
    }
  }

  async function deleteProduct(id) {
    try {
      let res = await axios.delete(`${apiUrl}api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        deleteFavs(id)
        Swal.fire({
          icon: "success",
          confirmButtonColor: "#5c195d",
          iconColor: "#5c195d",
          title: res.data.message,
          showConfirmButton: true,
        });
        setReload(!reload)
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

  return (
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
            if (res.data.success) {
              Swal.fire({
                icon: "success",
                confirmButtonColor: "#5c195d",
                iconColor: "#5c195d",
                title: res.data.message,
                showConfirmButton: true,
              });
              setReload(!reload)
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
                  title: "You have to registered to add this product to your cart",
                  showConfirmButton: true,
                });
              }
            }}
            clasess={
              cart ? ('more-and-buy-off icon-cart')
                : ('more-and-buy icon-cart')
            }
            onClick2={() => {
              deleteProduct(item._id)
            }}
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