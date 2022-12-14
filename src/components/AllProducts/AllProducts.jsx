import React from 'react'
import Checkboxes from '../Checkboxes/Checkboxes'
import CardChangeColor from '../CardChangeColor/CardChangeColor'
import './allProducts.css'

export default function AllProducts() {
    return (
        <div className='check-filter-cards'>
            <Checkboxes />
            <div className='cards-all-products'>
                <CardChangeColor />
            </div>
        </div>
    )
}
