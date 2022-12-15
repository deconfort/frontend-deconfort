import React from 'react'
import './CardEdit.css'

export default function CardChangeColor(props) {
  let { name, photo, price, category, description } = props

  return (
    <div className='card-change-color'>
      <div className='bg-watch'>
        <div className='gradients'>
          <div className='gradient' color='blue'></div>
          <div className='gradient' color='pink'></div>
          <div className='gradient' color='brown'></div>
          <div className='gradient' color='claro'></div>
        </div>
        <h1 className='watch'>{category}</h1>
        <img src={photo} alt='watch' className='watch-img show' />
      </div>
      <div className="info">
        <div className="watch-name">
          <h1 className='title-name'>{name}</h1>
            <h3 className='h3-color'>$ {price}</h3>
            <p>{description}</p>        
        </div>
      </div>
    </div>
  )
}
