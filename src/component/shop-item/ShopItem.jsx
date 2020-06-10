import React from "react";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./shopitem.scss";

import CustomButton from "../custom-button/Custom-button";
import { NextArrow, PrevArrow } from "../../assets/slider-arrow-utils";

// Action-----------------
import { addItemToCart } from "../../redux/cart/cart-action";

// Component----------------------
const ShopItem = ({ addItemToCart, history, match, item }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const { itemId, name, img1 } = item;
  return (
    <div className="shop-item">
      <Slider {...settings}>
        <div>
          <img
            className="shop-item-slider-img"
            src={img1}
            alt=""
            onClick={() => {
              history.push(`${match.url}/${itemId}`);
            }}
          />
        </div>
        <div>
          <img
            className="shop-item-slider-img"
            src={img1}
            alt=""
            onClick={() => {
              history.push(`${match.url}/${itemId}`);
            }}
          />
        </div>
        <div>
          <img
            className="shop-item-slider-img"
            src={img1}
            alt=""
            onClick={() => {
              history.push(`${match.url}/${itemId}`);
            }}
          />
        </div>
      </Slider>
      <div className="shop-item-info">
        <p>{name}</p>
        <CustomButton
          onClick={() => {
            // console.log(addItemToCart(item));
            addItemToCart(item);
          }}
        >
          加入購物車
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopItem));
