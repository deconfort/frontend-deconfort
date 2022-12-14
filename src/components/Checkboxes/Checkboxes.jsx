import React from 'react'
import './checkboxes.css'

export default function Checkboxes() {
  return (
    <div className='contain-filter-checkboxs'>
      <div className='categories-products'>
        <h4>Categories</h4>
        <ul className='list-categories'>
          <li>Bed back</li>
          <li>Bed back premium</li>
          <li>Stationery</li>
          <li>Lanterns</li>
          <li>Mirrors & Wall decor</li>
          <li>Storage & Wicker</li>
          <li>Vases & Jugs</li>
          <li>Plant Pots & Planters</li>
        </ul>
      </div>
      <div className='checkboxs-categories-product'>
        <h4>Filters</h4>
        <h5>Color</h5>
        <div><input type="checkbox" id="cbox1" className='color-checkbox' /><label for="cbox1">Pink</label></div>
        <div><input type="checkbox" id="cbox2" className='color-checkbox' /><label for="cbox2">Blue sky</label></div>
        <div><input type="checkbox" id="cbox3" className='color-checkbox' /><label for="cbox3">Blue</label></div>
        <div><input type="checkbox" id="cbox4" className='color-checkbox' /><label for="cbox4">White</label></div>
        <div><input type="checkbox" id="cbox5" className='color-checkbox' /><label for="cbox5">Tan</label></div>
        <div><input type="checkbox" id="cbox6" className='color-checkbox' /><label for="cbox6">Chestnut</label></div>
        <div><input type="checkbox" id="cbox7" className='color-checkbox' /><label for="cbox7">Brownish</label></div>
        <div><input type="checkbox" id="cbox8" className='color-checkbox' /><label for="cbox8">Chocolate</label></div>
      </div>
    </div>
  )
}
