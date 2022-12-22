import React, { useEffect, useState } from 'react'
import CardMyFavs from '../components/CardChangeColor/CardMyFavs'
import { useSelector, useDispatch } from 'react-redux'
import favoriteActions from '../redux/actions/favoriteActions'
import '../components/Editproduct/EditProductForm'
import Swal from 'sweetalert2'
import '../components/CardChangeColor/CardEdit.css'
import axios from 'axios'
import apiUrl from '../url'

export default function EditProduct() {
    const { getUserFavs, deleteFavs } = favoriteActions
    const dispatch = useDispatch()
    const { favorite } = useSelector((state) => state.favorites)
    const { idUser, token } = useSelector((state) => state.user)
    const [reload, setReload] = useState(false);
    const [cartProduct, setCartProduct] = useState([]);

    useEffect(() => {
        getProduct()
        getCartProduct();
    }, [])

    async function getCartProduct() {
        try {
            let res = await axios.get(`${apiUrl}api/shopping?userId=${idUser}`);
            setCartProduct(res.data.productsCart);
        } catch (error) { }
    }

    async function getProduct() {
        try {
            await dispatch(getUserFavs(idUser))
        } catch (error) {
            console.log(error)
        }
    }

    async function pullReaction(e) {
        try {
            let res = await dispatch(deleteFavs({ name: e.target.name, id: e.target.id, token }))
            if (res.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted',
                    text: 'Your favorite has been deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
                getProduct()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=''>
            <h1 className='tittleMyFavs'>My Favourites</h1>
            <div className='containerFavorits'>
                {favorite.map(item => {
                    async function addToCart() {
                        let product = {
                            name: item.productId.name,
                            photo: item.productId.photo[0],
                            price: item.productId.price,
                            productId: item.productId._id,
                            userId: idUser,
                        };
                        try {
                            let res = await axios.post(`${apiUrl}api/shopping`, product);
                            if (res.data.success) {
                                Swal.fire({
                                    icon: "success",
                                    confirmButtonColor: "#5c195d",
                                    iconColor: "#5c195d",
                                    title: res.data.message,
                                    showConfirmButton: true,
                                });
                                setReload(!reload);
                            }
                        } catch (error) {
                            Swal.fire({
                                icon: "warning",
                                confirmButtonColor: "#5c195d",
                                iconColor: "#5c195d",
                                title: error.response.data.message,
                                showConfirmButton: true,
                            });
                            console.log(error);
                        }
                    }
                    let cart = cartProduct.find((cart) => cart.productId._id === item.productId._id);
                    return <CardMyFavs
                        product={item.productId}
                        key={item._id}
                        name={item.name}
                        id={item._id}
                        onClick={pullReaction} 
                        clasess={
                            cart ? "more-and-buy-off icon-cart" : "more-and-buy icon-cart"
                        }
                        onClick2={()=>{
                            addToCart()
                        }}
                        />
                })
                }
            </div>
        </div>
    )
}