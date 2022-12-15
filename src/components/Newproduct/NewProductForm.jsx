import React,{ useState } from 'react'
import './NewProductForm.css'
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import apiUrl from "../../api/url";


export default function NewProductForm() {

  // let navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState(0);
  const [date, setDate] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  
  

  let dataNewProduct = {

    category:"",
    name: "",
    photo: "",
    description: "",
    date: "",
    stock:"",
    price: "",
    // user:"",
  };

  const handlerClickForm = (e) => {
    e.preventDefault();

    dataNewProduct = {

      category:category,
      name: name,
      photo: photo,
      description: description,
      date: date,
      stock: stock,
      price: price,
      // userId: user,
    };

    axios({
      method: "post",
      url: `${apiUrl}api/products`,
      data: dataNewProduct,
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => {
        console.log(res);
        setCategory("");
        if (res.data.success) {
          Swal.fire("creado");
          // return navigate("/");
        } else {
          Swal.fire(res.data.message.join("  -    -   -    -   -"));
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className='containerForm'>
        <h3>Create Product</h3>
        <form className='formRegister' onSubmit={handlerClickForm} >
            <label className='labelRegister'> Category
                <input
                 className='inputRegister' type="text" onChange={(e) => setCategory(e.target.value)} placeholder='Category' name='' />
            </label>
            <label className='labelRegister'>Name
                <input className='inputRegister' type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' name='' />
            </label>
            <label className='labelRegister'>Photo (URL)
                <input className='inputRegister' type="text" onChange={(e) => setPhoto(e.target.value)} placeholder='Photo' name='' />
            </label>
            <label className='labelRegister'>Description
                <input className='inputRegister' type="text" onChange={(e) => setDescription(e.target.value)}  placeholder='Description' name="" />
            </label>
            <label className='labelRegister'>Date
                <input className='inputRegister' type="date" onChange={(e) => setDate(e.target.value)} placeholder='Date' name="" />
            </label>
            <label className='labelRegister'>Stock
                <input className='inputRegister' type="number" onChange={(e) => setStock(e.target.value)} placeholder='Stock' name="" />
            </label>
            <label className='labelRegister'>Price
                <input className='inputRegister' type="number" onChange={(e) => setPrice(e.target.value)} placeholder='Price' name="" />
            </label>

            <button className="buttonRegister" type="submit"  >Create</button>

        </form>

    </div>
  )
}