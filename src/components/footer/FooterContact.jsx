import React from 'react'
import './footer.css'
import telephono from '../../image/telephono.png'
import email from '../../image/email.png'


export default function FooterContact() {
  return (
    <div>
      <h3 className="tittleFooter">Contact</h3>
      <div className='containerContactFooter'>
        <img className='imgContact' src={telephono} alt="Telephone" />
        <a className='links' href="tel:+3516532134">3516532314</a>
      </div>
      <div className='containerContactFooter'>
        <img className='imgContact' src={email} alt="Mail" />
        <a className='links' target="_blank" href="mailto:deconfort3536@gmail.com">deconfort3536@gmail.com</a>
      </div>
    </div>
  )
}
