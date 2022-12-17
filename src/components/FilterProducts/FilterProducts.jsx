import React from 'react'
import './filterProducts.css'

export default function FilterProducts() {
    return (
        <div className='container-filters'>
            <div className='filter-products'>
                <div>
                    <label for="site-search">Search the site: </label>
                    <input className='inputSearch' placeholder='Search your product' type="search" id="site-search" name="q" />
                </div>
                <select name="select" className='selects-products'>
                    <option value="value1">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
            </div>
        </div>
    )
}
