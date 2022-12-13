import React from 'react'
import './footer.css'


export default function FooterContact() {
  return (
    <div>
        <h3 className="tittleFooter">Contact</h3>
        <div className='containerContactFooter'>
            <img className='imgContact' src="https://assets.stickpng.com/images/5a452601546ddca7e1fcbc87.png" alt="Telephone" />
            <a className='links' href="tel:+3516532134">3516532314</a>
        </div>
        <div className='containerContactFooter'>
            <img className='imgContact' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/At_sign.svg/1200px-At_sign.svg.png" alt="Mail" />
            <a className='links' target="_blank" href="mailto:deconfort3536@gmail.com">deconfort3536@gmail.com</a>
        </div>
    </div>
  )
}
