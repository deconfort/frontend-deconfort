import React from 'react'
import './rowProducts3.css'
import { Link } from "react-router-dom";

export default function RowProducts3() {
  return (
    <div className='row-contain3'>
        <div className='container-item3 left-item3'>
        <Link to={`productTables`} className="rowprod-list-style-none"><h3>Tables</h3></Link>
        </div>
        <div className='container-item3 mid-item3'>
        <Link to={`productBlankets`} className="rowprod-list-style-none"><h3>Blankets</h3></Link>
        </div>
        <div className='container-item3 right-item3'>
        <Link to={`productChairs`} className="rowprod-list-style-none"><h3>Chairs</h3></Link>
        </div>
    </div>
  )
}