import React from 'react'
import './footer.css'
import FooterContact from './FooterContact'
import FooterMaps from './FooterMaps'
import FooterNetwork from './FooterNetwork'
import FooterPays from './FooterPays'
import Navigation from './Navigation'
import SubFooter from './SubFooter'

export default function Footer() {
  return (
    <>
    <div className='footerContainer'>
    <Navigation></Navigation>
    <FooterNetwork></FooterNetwork>
    <FooterContact></FooterContact>
    <FooterPays></FooterPays>
    <FooterMaps></FooterMaps>
    </div>
    <div>
      <SubFooter></SubFooter>
    </div>
    </>
  )
}
