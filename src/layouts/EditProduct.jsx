import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import EditProductForm from '../components/Editproduct/EditProductForm'
import { useSelector, useDispatch } from 'react-redux'
import CardChangeColor from '../components/CardChangeColor/CardChangeColor'
import productAction from '../redux/actions/productAction'

export default function EditProduct() {
  let [count, setCount] = useState(0);
  const dispatch = useDispatch()
  const { oneProduct } = useSelector((state) => state.products)
  const { getOneProduct } = productAction
  const { id } = useParams()
console.log(id)

  useEffect(() => {
    getProduct()
  }, [])

  async function getProduct() {
      await dispatch(getOneProduct(id))
  }

  useEffect(() => {
    let interval = setInterval(() => {
      count < 2 ? setCount(++count) : setCount(0);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);


  return (
    <>
      <CardChangeColor name={oneProduct?.name} photo={oneProduct?.photo[count]} category={oneProduct?.category} price={oneProduct.price} id={oneProduct._id} key={oneProduct._id} />
      <div className='containerForm'>
            <h3>Edit Product</h3>
            <form className='formRegister'>
                <label className='labelRegister'>Category
                    <input className='inputRegister' type="text" placeholder='Category' name='' />
                </label>
                <label className='labelRegister'>Name
                    <input className='inputRegister' type="text" placeholder='Name' name='' />
                </label>
                <label className='labelRegister'>Photos
                    <input className='inputRegister' type="text" placeholder='Photo 1' name='' />
                </label>
                <label className='labelRegister'>
                    <input className='inputRegister' type="text" placeholder='Photo 2' name='' />
                </label>
                <label className='labelRegister'>
                    <input className='inputRegister' type="text" placeholder='Photo 3' name='' />
                </label>
                <label className='labelRegister'>Description
                    <input className='inputRegister' type="text" placeholder='Description' name="" />
                </label>
                <label className='labelRegister'>Date
                    <input className='inputRegister' type="date" placeholder='Date' name="" />
                </label>
                <label className='labelRegister'>Price
                    <input className='inputRegister' type="number" placeholder='Price' name="" />
                </label>
                <button className="buttonRegister" type="submit">Edit</button>
            </form>
        </div>
    </>
  )
}
