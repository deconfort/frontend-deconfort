import React from 'react'
import Navigation from '../components/footer/Navigation'
import FooterNetwork from '../components/footer/FooterNetwork'
import FooterContact from '../components/footer/FooterContact'
import FooterPays from '../components/footer/FooterPays'
import FooterMaps from '../components/footer/FooterMaps'
import SubFooter from '../components/footer/SubFooter'

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
