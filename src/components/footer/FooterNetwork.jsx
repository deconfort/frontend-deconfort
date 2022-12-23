import React from 'react'
import './footer.css'
import logoinst from '../../image/logoinst.png'
import logowsp from '../../image/logowsp.png'
import logoface from '../../image/logoface.png'


export default function FooterNtework() {
  return (
    <div>
      <h3 className="tittleFooter">Social Networks</h3>
      <a href="https://www.instagram.com/deconfort_mindhub/" target="_blank" rel="noopener noreferrer"><img className='imgSocialFooter' src={logoinst} alt="Instagram" /></a>
      <a href="https://www.facebook.com/profile.php?id=100088562624568" target="_blank" rel="noopener noreferrer"><img className='imgSocialFooterFace' src={logoface} alt="Facebook" /></a>
      <a href="https://api.whatsapp.com/send?phone=3516532134" target="_blank" rel="noopener noreferrer"><img className='imgSocialFooterPng' src={logowsp} alt="Whatsapp" /></a>
    </div>
  )
}
