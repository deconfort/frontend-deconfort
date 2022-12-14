import React from 'react'
import './cardChangeColor.css'

export default function CardChangeColor(props) {
  let { name, photo, price, category } = props
  // let colors = ''
  function changeColor() {
    // colors.forEach(c => c.classList.remove)
    this.classList.add('active')
  }

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
        <a href='w'>
          <img src='https://www.pngitem.com/pimgs/m/408-4088931_hollow-star-icon-favorite-png-transparent-png.png' alt='fav icon' className='share' />
        </a>
        <img src={photo} alt='watch' className='watch-img show' />
        {/* <img src='./images/watch-pink.png' alt='watch' className='watch-img '/>
        <img src='./images/watch-brown.png' alt='watch' className='watch-img '/> */}
      </div>
      <div className="info">
        <div className="watch-name">
          <h1 className='title'>{name}</h1>
            <h3 className='h3-color'>$ {price}</h3>        
        </div>
        <div className="color-container">
          <span className='more-and-buy'>More info</span>
          <span className='more-and-buy'>Add to cart</span>
        </div>
      </div>
    </div>
  )
}
