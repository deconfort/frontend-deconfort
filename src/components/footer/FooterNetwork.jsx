import React from 'react'
import './footer.css'
import logoinst from '../../image/logoinst.png'
import logoFace from '../../image/logoFace.png'
import logoWap from '../../image/logoWapp.png'


export default function FooterNtework() {
  return (
    <div>
        <h3 className="tittleFooter">Social Networks</h3>
        <img className='imgSocialFooter' src={logoinst} alt="Instagram" />
        <img className='imgSocialFooterFace' src={logoFace} alt="Facebook" />
        <img className='imgSocialFooterPng' src={logoWap} alt="Whatsapp" />
    </div>
  )
}
