import React from 'react'
import './cardNotFound.css'
import { Link } from 'react-router-dom'

export default function CardNotFound() {
    return (
        <div className='notfound-card'>
            <h4 className='notfound-h4'>Product not found</h4>
            <p className='notfound-text'>The item you are looking is not available</p>
            <div>
                <div className='gradient-notfound'></div>
            </div>
            <div className='container-notfound-buttons'>
                <Link to='/allproducts' className='list-style-none'>
                    <div className='notfound-back'>Back to products</div>
                </Link>
                <Link to='/' className='list-style-none'>
                    <div className='notfound-back'>Back to home</div>
                </Link>
            </div>
        </div>
    )
}
