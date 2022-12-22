import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import favoriteActions from '../redux/actions/favoriteActions'


export default function Favorite(props) {
    const { token, idUser } = useSelector(state => state.user)
    const dispatch = useDispatch()
    let { productid } = props
    const { getFav, updateFavorite } = favoriteActions
    const [favs, setFav] = useState([])
    const [like, setLike] = useState(true)

    useEffect(() => {
        reactioness()
        // eslint-disable-next-line
    }, [like])

    async function reactioness() {
        let res = await dispatch(getFav(productid))
        setFav(res.payload.response)
    }

    async function likeEvent(e) {
        let name
        let icon
        let iconBack
        favs.data.map(react => {
            if (react.name === e.target.name) {
                name = react.name
                icon = react.icon
                iconBack = react.iconBack
            }
        })
        let data = {
            token,
            id: productid,
            name,
        }
        try {
            await dispatch(updateFavorite(data))
            setLike(!like)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {favs.success &&
                favs.data.map((reaction) => {
                    let res = reaction.userId.find(user => user._id === idUser)
                    return (
                    res ? (
                        <>
                        <img src={reaction.icon} name={reaction.name} alt={reaction.name} key={reaction._id} width='30px' onClick={likeEvent} />
                        </>
                    ) : (
                        <>
                        <img src={reaction.iconBack} name={reaction.name} alt={reaction.name} key={reaction._id} width='30px' onClick={likeEvent} />
                        </>
                    ))
                })
            }
        </div>
    )
}
