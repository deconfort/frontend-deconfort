import React from 'react'
import './NewProductForm.css'

export default function NewProductForm() {
  return (
    <div className='containerForm'>
        <h3>Create Product</h3>
        <form className='formRegister'>
            <label className='labelRegister'> category
                <input className='inputRegister' type="text" placeholder='category' name='' />
            </label>
            <label className='labelRegister'>name
                <input className='inputRegister' type="text" placeholder='Name' name='' />
            </label>
            <label className='labelRegister'>Photo
                <input className='inputRegister' type="text" placeholder='Photo' name='' />
            </label>
            <label className='labelRegister'>description
                <input className='inputRegister' type="number" placeholder='Description' name="" />
            </label>
            <label className='labelRegister'>date
                <input className='inputRegister' type="email" placeholder='Date' name="" />
            </label>
            <label className='labelRegister'>price
                <input className='inputRegister' type="email" placeholder='Price' name="" />
            </label>
            <label className='labelRegister'>userId
                <input className='inputRegister' type="password" placeholder='UserId' name="" />
            </label>
            <button className="buttonRegister" type="submit">Create</button>

        </form>

    </div>
  )
}