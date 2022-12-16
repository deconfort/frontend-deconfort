import React, { useEffect} from 'react'
import CardMyFavs from '../components/CardChangeColor/CardMyFavs'
import { useSelector, useDispatch } from 'react-redux'
import favoriteActions from '../redux/actions/favoriteActions'
import '../components/Editproduct/EditProductForm'
import Swal from 'sweetalert2'

export default function EditProduct() {
    const { getUserFavs, deleteFavs } = favoriteActions
    const dispatch = useDispatch()
    const { favorite } = useSelector((state) => state.favorites)
    const { idUser, token } = useSelector((state) => state.user)



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

    async function pullReaction(e) {
        try {
            let res = await dispatch(deleteFavs({name: e.target.name, id: e.target.id, token}))
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
        <>  
            <h1>My Favorits (🚧 in progress! 🤷‍♀️🤦‍♂️🚧)</h1>
            { favorite.map(favorite => {
                return <CardMyFavs product={favorite.productId} key={favorite._id} name={favorite.name} id={favorite._id} onClick={pullReaction}/>
            })
            }
        </>
    )

}