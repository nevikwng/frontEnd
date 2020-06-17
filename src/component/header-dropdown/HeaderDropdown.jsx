import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./HeaderDropdown.scss";

const HeaderDropdown = ({ setSubDiv, subDiv }) => {
  const content = (
    <CSSTransition
      in={subDiv}
      timeout={200}
      classNames="slide-in-top"
      mountOnEnter
      unmountOnExit
    >
      <div className="sub-div" onMouseLeave={() => setSubDiv(false)}>
        <Link to="/shop/men" className="" onClick={() => setSubDiv(false)}>
          Men
        </Link>
        <Link to="/shop/women" className="" onClick={() => setSubDiv(false)}>
          Women
        </Link>
        <Link to="/shop/food" className="" onClick={() => setSubDiv(false)}>
          Food
        </Link>
      </div>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("header-slide-dropdown")
  );
};

export default HeaderDropdown;
