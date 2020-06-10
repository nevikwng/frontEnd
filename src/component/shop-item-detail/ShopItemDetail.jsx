import React, { useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { shopItemDetailSelect } from "../../redux/shop/shop-selector";

import "./ShopItemDetail.scss";

const ShopItemDetail = ({ history, shopItem }) => {
  console.log(shopItem);
  const collection = useParams().collection;
  const { name, price, img1 } = shopItem;
  //   const imgArr = Object.values(imgObj);
  const imgArr = [img1, img1, img1];
  const [renderImg, setImg] = useState(imgArr);
  const changeImg = (clickImg) => {
    setImg(clickImg);
  };
  return (
    <>
      <img className="shop-item-img" src={renderImg} alt="" />
      <div>
        <h3
          style={{ cursor: "pointer" }}
          onClick={() => history.push(`/shop/${collection}`)}
        >
          {collection}
        </h3>
        <h1>{name}</h1>
        <h2>$ {price}</h2>
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
      <div className="shop-item-imgs-container">
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
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  shopItem: shopItemDetailSelect,
});

export default withRouter(connect(mapStateToProps)(ShopItemDetail));
