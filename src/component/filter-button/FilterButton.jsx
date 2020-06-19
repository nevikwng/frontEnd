import React, { useState } from "react";
import { connect } from "react-redux";
import { Icon } from "react-icons-kit";
import { ic_arrow_drop_down } from "react-icons-kit/md/ic_arrow_drop_down";

import { shopFilterPrice, shopFetchStart } from "../../redux/shop/shop-action";

import "./FilterButton.scss";
import { createStructuredSelector } from "reselect";
import { shopFilterTagSelect } from "../../redux/shop/shop-selector";
import CustomButton from "../custom-button/Custom-button";

const FilterButton = ({
  filterPrice,
  filterCollection,
  dispatch,
  shopFetchStart,
  collection,
}) => {
  const [toggleDrop, setToggleDrop] = useState(false);
  const [filter, setFilter] = useState("選擇篩選");
  return (
    <span className="filter-button-container">
      <button
        className="filter-button"
        onClick={() => setToggleDrop(!toggleDrop)}
      >
        <span>{filter}</span>
        <Icon icon={ic_arrow_drop_down} size={16} />
      </button>
      {toggleDrop && (
        <div
          className={`${
            filterCollection ? "filter-dropdown-custom" : ""
          } filter-dropdown`}
        >
          <ul>
            {filterPrice &&
              filterPrice.map((list) => (
                <li
                  className={`${
                    filter === list ? "price-selected" : ""
                  } filter-list`}
                  key={list}
                  onClick={() => {
                    setFilter(list);
                    setToggleDrop(!toggleDrop);
                    dispatch(shopFilterPrice(list));
                  }}
                >
                  {list}
                </li>
              ))}

            {filterCollection &&
              filterCollection.map((list) => (
                <li
                  className={`${
                    filter === list ? "price-selected" : ""
                  } filter-list`}
                  key={list}
                  onClick={() => {
                    setFilter(list);
                    setToggleDrop(!toggleDrop);
                    shopFetchStart(undefined, list);
                  }}
                >
                  {list}
                </li>
              ))}
            {filterCollection && (
              <li className="cancel-filter-li">
                <span onClick={() => shopFetchStart(collection, undefined)}>
                  取消篩選
                </span>
              </li>
            )}
          </ul>
        </div>
      )}
    </span>
  );
};

const mapStateToProps = createStructuredSelector({
  filterTag: shopFilterTagSelect,
});

const mapDispatchToProps = (dispatch) => ({
  shopFetchStart: (url, typeUrl) => dispatch(shopFetchStart(url, typeUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
