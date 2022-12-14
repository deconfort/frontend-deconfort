import React from 'react'
import './NewProductForm.css'

export default function NewProductForm() {
  return (
    <div className='containerForm'>
        <h3>Create Product</h3>
        <form className='formRegister'>
            <label className='labelRegister'> Category
                <input className='inputRegister' type="text" placeholder='Category' name='' />
            </label>
            <label className='labelRegister'>Name
                <input className='inputRegister' type="text" placeholder='Name' name='' />
            </label>
            <label className='labelRegister'>Photo
                <input className='inputRegister' type="text" placeholder='Photo' name='' />
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
            <button className="buttonRegister" type="submit">Create</button>

        </form>

    </div>
  )
}