import React, { useEffect} from 'react'
import CardMyFavs from '../components/CardChangeColor/CardMyFavs'
import { useSelector, useDispatch } from 'react-redux'
import favoriteActions from '../redux/actions/favoriteActions'
import '../components/Editproduct/EditProductForm'


export default function EditProduct() {
    const { getUserFavs } = favoriteActions
    const dispatch = useDispatch()
    const { favorite } = useSelector((state) => state.favorites)
    const { idUser } = useSelector((state) => state.user)



    useEffect(() => {
        getProduct()
    }, [])

    async function getProduct() {
        try {            
            await dispatch(getUserFavs(idUser))
    }    catch (error) {
            console.log(error)
        }
    }

    // async function updateProduct(e) {
    //     e.preventDefault()
    //     let productEdited = {
    //         name: name.current.value,
    //         photo: [photo1.current.value, photo2.current.value, photo3.current.value],
    //         category: category.current.value,
    //         price: price.current.value,
    //         description: description.current.value,
    //     }

    //     try {
    //         let res = await dispatch(editProduct({ token, id, productEdited }))
    //         if (res.payload.success) {
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Product edited',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             })
    //             getProduct()
    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: res.error,
    //                 footer: 'try again'
    //             })
    //         }
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <>
            { favorite.map(favorite => {
                return <CardMyFavs product={favorite.productId} key={favorite._id} />
            })
            }
        </>
    )

}