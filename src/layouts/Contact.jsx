import React from 'react'
import ContactComp from '../components/Contact/Contact'
import FormContact from '../components/Contact/FormContact'
import '../style.css'

export default function Contact() {
  return (
    <div className='containerContact'>
        <ContactComp></ContactComp>
        <FormContact></FormContact>
    </div>
  )
}
