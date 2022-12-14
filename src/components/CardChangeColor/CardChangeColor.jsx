import React from 'react'
import './cardChangeColor.css'

export default function CardChangeColor() {
  // let colors = ''
  function changeColor(){
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
          {/* <div className='gradient' color='claro'></div> */}
        </div>
        <h1 className='watch'>watch</h1>
        <a href='w'>
          <img src='https://www.pngitem.com/pimgs/m/408-4088931_hollow-star-icon-favorite-png-transparent-png.png' alt='fav icon' className='share'/>
        </a>
        <img src='./images/watch-sinbackground.png' alt='watch' className='watch-img show'/>
        <img src='./images/watch-pink.png' alt='watch' className='watch-img '/>
        <img src='./images/watch-brown.png' alt='watch' className='watch-img '/>
      </div>
      <div className="info">
        <div className="watch-name">
          <h1 className='title'>Old watch clock</h1>
          <span className='new'>new</span>
        </div>
        <div className="color-container">
          <h3 className='h3-color'>color</h3>
          <div className='colors'>
            <span onClick={changeColor} className='color' color='blue'></span>
            <span onClick={changeColor} className='color' color='pink'></span>
            <span onClick={changeColor} className='color active' color='brown'></span>
            {/* <span className='color' color='claro'></span> */}
          </div>
        </div>
      </div>
    </div>
  )
}
