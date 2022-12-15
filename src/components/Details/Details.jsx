import React from 'react'
import './details.css'

export default function Details(props) {
    let {category, name, price, photo, description} = props
    return (
        <div className='contain-details'>
            <div className='nametitle-andsvg'>
                <div>Name title</div>
                <div className='svgs'>
                    <div><svg width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <polygon fill="var(--ci-primary-color, currentColor)" points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039" class="ci-primary" />
                        <path fill="var(--ci-primary-color, currentColor)" d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z" class="ci-primary" />
                        <path fill="var(--ci-primary-color, currentColor)" d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z" class="ci-primary" />
                    </svg></div>
                    <div>Fav</div>
                </div>
            </div>
            <div className='contain-info-item'>
                <div className="texto">
                    <div>
                        <h2>GET name</h2>
                        <h4>category</h4>
                    </div>
                    <p className='texto-witch'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in quos repellat possimus rerum! Fugiat ipsum dicta temporibus numquam, est sunt eligendi aut quis sequi eius repudiandae assumenda odio placeat.</p>
                    <h6>Price: $</h6>
                    <button className='addcart-detail'>Add to cart</button>
                </div>
                <img src='https://crystalcomfort.co.uk/wp-content/uploads/2022/05/26019_watermarked-2.png' className='foto-detail' alt='x'></img>
            </div>
        </div>
    )
}
