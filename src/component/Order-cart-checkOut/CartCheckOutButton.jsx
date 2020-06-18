import React, { useState, useEffect } from 'react'
import './CartCheckOutButton.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartItemsSelect, favoriteItemsSelect } from '../../redux/cart/cart-selector';
import { withRouter } from 'react-router-dom';


const CartCheckOutButton = ({ cartItems, history, addToSever, additemToSever }) => {


    const [cubon, setcubon] = useState(0)
    const [Total, setTotal] = useState(0)
    const [payType, setpayType] = useState('信用卡')
    const back = () => {
        history.push('/CartList', {
            pay: history.location.state.pay,
            cubon: history.location.state.cubon
        })

    }


    useEffect(() => {
        setTotal(cartItems.reduce((acc, cart) => (acc.quantity * acc.price + cart.quantity * cart.price)))
    }, [Total])
    useEffect(() => {
        setcubon(history.location.state.cubon)
    }, [cubon])
    return (
        <div className="content-right">
            <div>總計：</div>
            <h3>${Total}</h3>
            <div>折扣：{cubon}</div>
            <div>總計：{Total - cubon}</div>
            <button onClick={() => back()}>修改付款方式</button>
            <button type="submit" onClick={() => (addToSever, additemToSever)}>結帳</button>
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelect,
    cartFavoriteItems: favoriteItemsSelect,
});

export default withRouter(connect(mapStateToProps)(CartCheckOutButton))