import React,{ useEffect,useRef } from 'react'
import './NewProductForm.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import apiUrl from "../../url";
import { useDispatch, useSelector } from 'react-redux';

import productAction from '../../redux/actions/productAction';

export default function NewProductForm() {
  const { idUser } = useSelector((state) => state.user);
  let navigate = useNavigate();
  const {token} = useSelector((state) => state.user)

  const { getProducts } = productAction;
   const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

     useEffect(() => {
    dispatch(getProducts());

    // eslint-disable-next-line
  }, []);

  let categories =products.map(product=>product.category)

  let categoriesFilter = [...new Set(categories)]
console.log(categoriesFilter);
  
let category = useRef()
let name = useRef()
let photo = useRef()
let description = useRef()
let date = useRef()
let stock = useRef()
let price = useRef()
let information =useRef()

async function newProduct(e){
  e.preventDefault()
  let newProduct = {

    category:category.current.value,
    name: name.current.value,
    photo: [photo.current.value],
    description: description.current.value,
    date: date.current.value,
    stock: stock.current.value,
    price: price.current.value,
    userId: idUser,
  }
  let headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    let res= await axios.post(`${apiUrl}api/products`,newProduct,headers)
    if (res.data.success) {
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: true,
        iconColor: "#5c195d",
        confirmButtonColor: "#5c195d",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/allproducts')
        };
      });
      }    
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.response.data.message.join('<br/>'),
      showConfirmButton: true,
      iconColor: "#5c195d",
      confirmButtonColor: "#5c195d",
    });
  }
  }

  return (

    <div className='containerForm'>
    <div className='containerFormCreateProduct'>

        <form className='formRegister' onSubmit={newProduct} ref={information} >
        <h3>Create Product</h3>

        <label className='labelRegister'>Category
        <select ref={category} className="form-control form-sign">
                      <option>Select The Category</option>
                      {categoriesFilter.map(category=>  <option key = {category} value = {category}>{category} </option>)}
                    </select>

            </label>

            <label className='labelRegister'>Name
                <input className='inputRegister' type="text" ref={name} placeholder='Name' name='' />
            </label>
            <label className='labelRegister'>Photo (URL)
                <input className='inputRegister' type="text" ref={photo} placeholder='Photo' name='' />
            </label>
            <label className='labelRegister'>Description
                <input className='inputRegister' type="text" ref={description}  placeholder='Description' name="" />
            </label>
            <label className='labelRegister'>Date
                <input className='inputRegister' type="date" ref={date} placeholder='Date' name="" />
            </label>
            <label className='labelRegister'>Stock
                <input className='inputRegister' type="number" ref={stock} placeholder='Stock' name="" />
            </label>
            <label className='labelRegister'>Price
                <input className='inputRegister' type="number" ref={price} placeholder='Price' name="" />
            </label>



            <button className="buttonRegister" type="submit"  >Create</button>


        </form>

    </div>
    </div>
  )
}