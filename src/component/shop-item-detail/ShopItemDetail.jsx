import React, { useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { shopItemDetailSelect } from "../../redux/shop/shop-selector";

import ShopCountButton from "../shop-count-button/ShopCountButton";
import Favorite from "../favorite-icon/Favorite";

import "./ShopItemDetail.scss";

const ShopItemDetail = ({ history, shopItem }) => {
  // console.log(shopItem);
  const collection = useParams().collection;
  const { name, price, img1 } = shopItem;
  //   const imgArr = Object.values(imgObj);
  const imgArr = [img1, img1 + " ", img1 + "  "];
  const [renderImg, setImg] = useState(imgArr);
  const changeImg = (clickImg) => {
    setImg(clickImg);
  };

  return (
    <>
      <div className="shop-item-imgs-container">
        <div className="shop-item-img-group-container">
          {imgArr.map((img) => (
            <img
              key={Math.random() * 1000}
              className={img === renderImg ? "seletBorder" : ""}
              src={img}
              alt=""
              onClick={() => changeImg(img)}
            />
          ))}
        </div>
        <img className="shop-item-img" src={renderImg} alt="" />
      </div>

      <div className="shop-item-info-container">
        <div className="collection-fav-container">
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => history.push(`/shop/${collection}`)}
          >
            {collection.toUpperCase()}
          </h3>
          <Favorite item={shopItem} />
        </div>
        <h1>{name}</h1>
        <h2>$ {price}</h2>

        <ShopCountButton cartItem={shopItem} />
        <h4>
          slkdhfihfiwofhiwh
          <br />
          gdlkvhiohgiwhoifv
          <br />
          hsifohvwrfhsldkhg
          <br />
          iowfhsldfhoiwefhoi
        </h4>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  shopItem: shopItemDetailSelect,
});

export default withRouter(connect(mapStateToProps)(ShopItemDetail));
