import React, { useEffect, useRef, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardEdit from '../components/CardChangeColor/CardEdit'
import { useSelector, useDispatch } from 'react-redux'
import productAction from '../redux/actions/productAction'
import '../components/Editproduct/EditProductForm'
import Swal from 'sweetalert2'



export default function EditProduct() {
    const dispatch = useDispatch()
    const [oneProduct, setOneProduct] = useState({})
    const {token} = useSelector((state) => state.user)
    const { getOneProduct, editProduct } = productAction
    const { id } = useParams()
    const form = useRef()
    const name = useRef()
    const photo1 = useRef()
    const photo2 = useRef()
    const photo3 = useRef()
    const category = useRef()
    const price = useRef()
    const description = useRef()


    useEffect(() => {
        getProduct()
    }, [])

    async function getProduct() {
        try {
            let res = await dispatch(getOneProduct(id))
            setOneProduct(res.payload.response)
            console.log(res.payload)
            if (res.payload.success) {
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.error,
                    footer: 'try again'
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    async function updateProduct(e) {
        e.preventDefault()
        let productEdited = {
            name: name.current.value,
            photo: [photo1.current.value, photo2.current.value, photo3.current.value],
            category: category.current.value,
            price: price.current.value,
            description: description.current.value,
        }

        try {
            let res = await dispatch(editProduct({token, id, productEdited}))
            if (res.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Product edited',
                    showConfirmButton: false,
                    timer: 1500
                })
                getProduct()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.error,
                    footer: 'try again'
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='containerForm'>
                <CardEdit name={oneProduct.name} photo={oneProduct.photo} category={oneProduct.category} price={oneProduct.price} key={oneProduct._id} description={oneProduct.description} />
                <form className='formEditProduct' ref={form}>
                    <h3>Edit Product</h3>
                    <label className='labelRegister'>Category
                        <input className='inputRegister' defaultValue={oneProduct.category} type="text" placeholder='Category' name='' ref={category} />
                    </label>
                    <label className='labelRegister'>Name
                        <input className='inputRegister' defaultValue={oneProduct.name} type="text" placeholder='Name' name='' ref={name} />
                    </label>
                    <label className='labelRegister'>Photos
                        <input className='inputRegister' defaultValue={oneProduct.photo && oneProduct.photo[0]} type="text" placeholder='Photo 1' name='' ref={photo1} />
                    </label>
                    <label className='labelRegister'>
                        <input className='inputRegister' defaultValue={oneProduct.photo && oneProduct.photo[1]} type="text" placeholder='Photo 2' name='' ref={photo2} />
                    </label>
                    <label className='labelRegister'>
                        <input className='inputRegister' defaultValue={oneProduct.photo && oneProduct.photo[2]} type="text" placeholder='Photo 3' name='' ref={photo3} />
                    </label>
                    <label className='labelRegister'>Description
                        <textarea /* className='inputRegister' */ defaultValue={oneProduct.description} type="text" placeholder='Description' name='' ref={description}/>
                    </label>
                    <label className='labelRegister'>Price
                        <input className='inputRegister' defaultValue={oneProduct.price} type="number" placeholder='Price' name="" ref={price}/>
                    </label>
                    <button className="buttonRegister" type="submit" onClick={updateProduct}>Edit</button>
                </form>
            </div>
        </>
    )

}
