import React from 'react'
import './rowProducts2.css'
import { Link } from "react-router-dom";

export default function RowProducts2() {
  return (
    <div className='row-contain2'>
        <div className='container-item2 left-item2'>
        <Link to={`productCushions`} className="rowprod-list-style-none"><h3>Cushions</h3></Link>
        </div>
        <div className='container-item2 mid-item2'>
        <Link to={`productMirrors`} className="rowprod-list-style-none"><h3>Mirrors</h3></Link>
        </div>
        <div className='container-item2 right-item2'>
        <Link to={`productDiffuser`} className="rowprod-list-style-none"><h3>Diffuser</h3></Link>
        </div>
    </div>
  )
}