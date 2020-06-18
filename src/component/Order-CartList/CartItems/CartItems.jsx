import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import './CartItems.scss'
const CartItems = ({ cartItems }) => {
    return (
        <>
            {cartItems.map((item, index) => (
                <ul key={index} className="content-wrap-ul">
                    <li><img className="objectFit" src={item.img1} /></li>
                    <li>{item.name}</li>
                    <li>{item.itemType}</li>
                    <li>{item.price}</li>
                    <li>{item.quantity}</li>
                    <li value={item.quantity * item.price} >{item.quantity * item.price}</li>
                    <ul className="icon-list">
                        <a className="icon" href="/"><FaTrashAlt /></a>
                        <a className="icon" href="/"><FaStar /></a>
                    </ul>
                </ul>
            ))}
        </>
    )
}

export default CartItems