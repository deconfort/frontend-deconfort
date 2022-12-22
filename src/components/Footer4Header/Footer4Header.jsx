import React from 'react'
import './footer4Header.css'
import { Link } from 'react-router-dom'

export default function Footer4Header() {
  return (
    <div className='footer-banner'>
      <Link to='/allproducts' className='button-catalogue linkCatalogue'>
        <p>View all catalogue</p>
      </Link>
      <div className='column'>
        <h2>Furniture for your home</h2>
        <p>Make your home the most comfortable place in the world</p>
      </div>
    </div>
  )
}
