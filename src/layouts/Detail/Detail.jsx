import Details from '../../components/Details/Details'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiUrl from '../../url';
import Swal from "sweetalert2";
import { useSelector } from 'react-redux';



export default function Detail() {
  const [product, setProduct] = useState([]);
  const { idUser } = useSelector((state) => state.user);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`${apiUrl}api/products/${id}`)
      .then((res) => setProduct(res.data.response));
    // eslint-disable-next-line
  }, []);

  async function addToCart() {
    let Oneproduct = {
      name: product.name,
      photo: product.photo[0],
      price: product.price,
      productId: product._id,
      userId: idUser,
    };
    try {
      let res = await axios.post(`${apiUrl}api/shopping`, Oneproduct);
      console.log(res);
      if(res.data.success){
        Swal.fire({
          icon: "success",
          confirmButtonColor: "#5c195d",
          iconColor: "#5c195d",
          title: res.data.message,
          showConfirmButton: true,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "warning",
        confirmButtonColor: "#5c195d",
        iconColor: "#5c195d",
        title: error.response.data.message,
        showConfirmButton: true,
      });
    
    }
  }
  return (
    <div className='detailLayout'>

        <Details
        onClick={addToCart}
        name={product.name}
        price={product.price}
        description={product.description}
        category={product.category}
        photo={product.photo}
        id={id}
        />
    </div>
  )
}

