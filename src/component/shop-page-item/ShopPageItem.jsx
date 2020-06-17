import React from "react";
import { useHistory } from "react-router-dom";

const ShopPageItem = ({ collection }) => {
  const history = useHistory();
  return (
    <div className="shop-page-collection">
      <img
        className=""
        src={collection.img1}
        alt=""
        onClick={() => {
          history.push(
            `/shopitem/${collection.itemCollection}/${collection.itemId}`
          );
        }}
      />
      <p>{collection.name}</p>
    </div>
  );
};

export default ShopPageItem;
