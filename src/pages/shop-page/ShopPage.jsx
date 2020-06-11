import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "./shoppage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextArrow, PrevArrow } from "../../assets/slider-arrow-utils";

// Component-----------
const ShopPage = ({ match: { path } }) => {
  // slider setting
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
  return (
    <div className="shop-page">
      <div className="shop-slider-container">
        <Slider {...settings}>
          <Link className="img-info" to={path + "/man"}>
            <h3>Man</h3>
          </Link>
          <Link className="img-info" to={path + "/women"}>
            <h3>Women</h3>
          </Link>
          <Link className="img-info" to={path + "/food"}>
            <h3>Food</h3>
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default ShopPage;
