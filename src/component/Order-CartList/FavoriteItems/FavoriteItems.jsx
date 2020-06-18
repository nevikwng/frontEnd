import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import './FavoriteItems.scss'
const FavoriteItem = ({ cartFavoriteItems }) => {
    const FavoriteItems = Object.values(cartFavoriteItems)
    return (
        <>
            {
                FavoriteItems.map((item, index) => (
                    <ul key={index} className="fav-wrap-ul">
                        <li><img className="objectFit" src={item.img1} /></li>
                        <li>{item.name}</li>
                        <li>{item.itemType}</li>
                        <li>{item.price}</li>
                        <ul className="icon-list">
                            <a className="icon" href="/"><FaTrashAlt /></a>
                            <a className="icon" href="/"><FaStar /></a>
                        </ul>
                    </ul>
                ))
            }
        </>
    )
}

export default FavoriteItem