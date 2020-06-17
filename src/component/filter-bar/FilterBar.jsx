import React from "react";
import FilterButton from "../filter-button/FilterButton";

import "./FilterBar.scss";

const FilterBar = ({ filterPrice, filterType, title, filterTitle }) => {
  return (
    <div className="filter-bar">
      <div className="filter-bar-itemtype">
        <span>{title} : </span>
        <FilterButton filterType={filterType} filterPrice={filterPrice}>
          {filterTitle}
        </FilterButton>
      </div>
    </div>
  );
};

export default FilterBar;
