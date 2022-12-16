import React from 'react'
import './CardEdit.css'
import { Link } from 'react-router-dom'

export default function CardMyFavs(props) {
  let { product, onClick, name, id } = props
  return (
    <div className='card-change-color'>
      <div className='bg-watch'>
        <div className='gradients'>
          <div className='gradient' color='blue'></div>
          <div className='gradient' color='pink'></div>
          <div className='gradient' color='brown'></div>
          <div className='gradient' color='claro'></div>
        </div>
          <img src={product.photo} alt='watch' className='watch-img show' />
      </div>
      <div className="info">
        <div className="watch-name">
        <Link to={`/products/${product._id}`} className='link'>
          <h1 className='title-name'>{product.name}🤢</h1>
        </Link>
        </div>
        <button name={name} id={id} onClick={onClick}>Delete</button>
      </div>
    </div>
  )
}
