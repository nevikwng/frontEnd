import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link, useHistory } from "react-router-dom";

import "./shoppage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextArrow, PrevArrow } from "../../assets/slider-arrow-utils";
import { shopPageStart } from "../../redux/shop/shop-action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  shopIsFetchingSelect,
  shopPageCollectionsSelect,
} from "../../redux/shop/shop-selector";
import LoadingSpinner from "../../component/loading-spinner/LoadingSpinner";
import CustomButton from "../../component/custom-button/Custom-button";
import ShopPageItem from "../../component/shop-page-item/ShopPageItem";

// Component-----------
const ShopPage = ({ shopPageCollections, shopPageStart, isFetching }) => {
  const history = useHistory();
  useEffect(() => {
    shopPageStart();
  }, [shopPageStart]);
  //Hrader slider setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    // responsive: [
    //     {
    //         breakpoint: 768, //max-width
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     }
    // ]
  };

  // shop Collections setting
  const shopItemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="shop-page">
      {isFetching || !shopPageCollections.length ? (
        <LoadingSpinner />
      ) : (
        <div className="shop-slider-container">
          <Slider {...settings}>
            <Link className="img-info" to="/shop/men">
              <h3>Men</h3>
            </Link>
            <Link className="img-info" to="/shop/women">
              <h3>Women</h3>
            </Link>
            <Link className="img-info" to="/shop/food">
              <h3>Food</h3>
            </Link>
          </Slider>
          <div className="shop-page-newitem-title-container">
            <div />
            <p>最新商品</p>
          </div>
          <Slider {...shopItemSettings}>
            {shopPageCollections.map((collection) => (
              <ShopPageItem key={`${collection.id}a`} collection={collection} />
            ))}
          </Slider>
          <div style={{ height: "30px" }} />
          <div className="shop-collection-section">
            <div className="img" />
            <div className="content">
              <h1>Men</h1>
              <CustomButton onClick={() => history.push("/shop/men")}>
                了解詳情
              </CustomButton>
            </div>
          </div>
          <div className="shop-collection-section">
            <div className="content">
              <h1>Women</h1>
              <CustomButton onClick={() => history.push("/shop/women")}>
                了解詳情
              </CustomButton>
            </div>
            <div className="img" />
          </div>
          <div className="shop-collection-section">
            <div className="img" />
            <div className="content">
              <h1>Food</h1>
              <CustomButton onClick={() => history.push("/shop/food")}>
                了解詳情
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: shopIsFetchingSelect,
  shopPageCollections: shopPageCollectionsSelect,
});

const mapDispatchToProps = (dispatch) => ({
  shopPageStart: () => dispatch(shopPageStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
