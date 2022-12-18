import React, { useRef, useEffect, useState } from "react";
import CardChangeColor from "../CardChangeColor/CardChangeColor";
import axios from "axios";
import apiUrl from "../../url";
import "../ProductCategory/ProductCategory"
import {useSelector } from "react-redux";
import Swal from "sweetalert2";


export default function ProductCategory() {
  const { idUser } = useSelector((state) => state.user);
  let [products, setProducts] = useState([]);


  useEffect(() => {
    axios
      .get(`${apiUrl}api/products?category=cushions`)
      .then((res) => setProducts(res.data.response));
  }, []);


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
           onClick={addToCart}
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
