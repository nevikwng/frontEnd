import React, { useState } from "react";
import { connect } from "react-redux";
import { Icon } from "react-icons-kit";
import { ic_arrow_drop_down } from "react-icons-kit/md/ic_arrow_drop_down";

import { shopFilterPrice } from "../../redux/shop/shop-action";

import "./FilterButton.scss";
import { createStructuredSelector } from "reselect";
import { shopFilterTagSelect } from "../../redux/shop/shop-selector";

const FilterButton = ({ children, filterPrice, dispatch }) => {
  const [toggleDrop, setToggleDrop] = useState(false);
  return (
    <span className="filter-button-container">
      <button
        className="filter-button"
        onClick={() => setToggleDrop(!toggleDrop)}
      >
        <span>{children}</span>
        <Icon icon={ic_arrow_drop_down} size={16} />
      </button>
      {toggleDrop && (
        <div className="filter-dropdown">
          <ul>
            {filterPrice &&
              filterPrice.map((list) => (
                <li
                  key={list}
                  onClick={() => {
                    setToggleDrop(!toggleDrop);
                    dispatch(shopFilterPrice(list));
                  }}
                >
                  {list}
                </li>
              ))}
          </ul>
        </div>
      )}
    </span>
  );
};

const mapStateToProps = createStructuredSelector({
  filterTag: shopFilterTagSelect,
});

export default connect(mapStateToProps)(FilterButton);
