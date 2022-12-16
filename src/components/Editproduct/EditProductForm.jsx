import React, { useParams, useRef } from 'react'
import './EditProductForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { editProduct, getOneProduct } from '../../redux/actions/productAction'

export default function EditProductForm() {
    return (
        <div className='containerForm'>
            <h3>Edit Product</h3>
            <form className='formEditProduct'>
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
    )
}