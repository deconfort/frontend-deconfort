import React from 'react'
import './rowProducts.css'
import { Link } from "react-router-dom";

export default function RowProducts() {
  return (
    <div className='row-contain'>
        <div className='container-item left-item'>
        <Link to={`productCategory`} className="rowprod-list-style-none"><h3>Desk</h3></Link>
        </div>
        <div className='container-item mid-item'>
        <Link to={`productVases`} className="rowprod-list-style-none"><h3>Vases</h3></Link>
        </div>
        <div className='container-item right-item'>
        <Link to={`productFrames`} className="rowprod-list-style-none"><h3>Frames</h3></Link>
        </div>
    </div>
  )
}
