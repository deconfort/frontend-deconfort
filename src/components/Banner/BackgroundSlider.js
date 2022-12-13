import './Backgrounds.css'
import imageSlide from './dataCarousel'
import { useState, useEffect } from 'react'
import Footer4Header from '../Footer4Header/Footer4Header'


const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0)
  useEffect(() => {
    let timer = setTimeout(() => {
      if (currentState === 7) {
        setCurrentState(0)
      } else {
        setCurrentState(currentState + 1)
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [currentState])

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgrounPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
  }

  const goToNext = (currentState) => {
    setCurrentState(currentState)
  }

  return (
    <div className='countiner-style'>
      <div style={bgImageStyle}></div>
      <div className='description'>
        <div>
          <h1>{imageSlide[currentState].title}</h1>
          <p>{imageSlide[currentState].body}</p>
        </div>
        <div className='next-image'>
          {
            imageSlide.map((imageSlide, currentState) => (
              <span key={currentState} onClick={() => goToNext(currentState)}></span>
            ))
          }
        </div>
      </div>
      <Footer4Header/>
    </div>
  )
}

export default BackgroundSlider
