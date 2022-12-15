import React from 'react'
import './buttonSeeAll.css'
import { Link } from 'react-router-dom'

export default function ButtonSeeAll() {
  return (
    <div className='div-see-all'>
      <Link to='/allproducts'>
        <div className='button-see-all'>See all products</div>
      </Link>
    </div>
  )
}
