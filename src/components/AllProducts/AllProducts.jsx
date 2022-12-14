import React, { useEffect, useState } from 'react'
import Checkboxes from '../Checkboxes/Checkboxes'
import CardChangeColor from '../CardChangeColor/CardChangeColor'
import './allProducts.css'
import axios from "axios";
import apiUrl from "../../url";


export default function AllProducts() {
    let [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios
        .get(`${apiUrl}api/products/`)
        .then((res) => setProducts(res.data.response));
    }, [])

    console.log(products);


    return (
        <div className='check-filter-cards'>
            <Checkboxes />
            <div className='cards-all-products'>
            {products.map((item) => {
                return(
                <CardChangeColor
                name={item.name}
                photo={item.photo[0]}
                category={item.category}

                />  
            )
            })}
            </div>
        </div>
    )
}
