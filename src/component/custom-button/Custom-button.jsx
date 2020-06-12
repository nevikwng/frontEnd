import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, shopCount, ...otherProps }) => (
  <button
    className={`${shopCount ? "shop-count-btn" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
