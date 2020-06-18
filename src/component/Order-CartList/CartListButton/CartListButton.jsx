import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartItemsSelect, favoriteItemsSelect } from '../../../redux/cart/cart-selector';
import { withRouter } from 'react-router-dom';

import './CartListButton.scss'
const CartListButton = ({ cartItems, history }) => {

    console.log(history.location.state)
    console.log(cartItems)

    const [cubon, setcubon] = useState(0)
    const [Total, setTotal] = useState(0)
    const [payType, setpayType] = useState(0)


    const next = () => {
        if (payType == false) {
            alert('請選擇付款方式')
            return false
        }
        history.push('/CheckOutPage', {
            pay: payType,
            cubon: cubon,
            cartItems: cartItems
        })

    }


    useEffect(() => {
        setTotal(cartItems.reduce((acc, cart) => (acc.quantity * acc.price + cart.quantity * cart.price)))
    }, [])




    return (


        <div className="content-right">

            <div>總計：</div>
            <h3>${Total}</h3>
            <div>折扣：{cubon}</div>
            <div>總計：{Total - cubon}</div>
            <div>
                <select id="select-pay-type" name="PayType" value={payType} required="required" className="select-type" onChange={(e) => setpayType(e.target.value)}>
                    <option value="0">請選擇付款方式</option>
                    <option value="信用卡">信用卡</option>
                    <option value="現金">現金</option>
                </select>
            </div>
            <div>
                <select id="select-pay-type" value={cubon} name="PayType" required="required" className="select-type" onChange={(e) => (setcubon(e.target.value))}>
                    <option value="">請選擇優惠券</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                </select>
            </div>
            <button onClick={() => next()}>下一步</button>
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelect,
    cartFavoriteItems: favoriteItemsSelect,
});

export default withRouter(connect(mapStateToProps)(CartListButton))