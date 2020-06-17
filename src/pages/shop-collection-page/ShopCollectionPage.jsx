import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useParams, Link } from "react-router-dom";

import LoadingSpinner from "../../component/loading-spinner/LoadingSpinner";
import ShopItem from "../../component/shop-item/ShopItem";
import {
  shopCollectionsSelect,
  shopIsFetchingSelect,
  shopUrlSelect,
} from "../../redux/shop/shop-selector";
import { shopFetchStart } from "../../redux/shop/shop-action";
import FilterBar from "../../component/filter-bar/FilterBar";

import "./ShopCollectionPage.scss";

const ShopCollectionPage = ({
  collections,
  shopFetchStart,
  isFetching,
  shopUrl,
}) => {
  const collection = useParams().collection;
  const itemType = useParams().itemType;
  // console.log(collection, itemType);

  useEffect(() => {
    shopFetchStart(collection, itemType);
  }, [collection, shopFetchStart, itemType]);
  return (
    <div className="collection-page">
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="collection-title">{collection}</h1>
          <div className="filter-bar-container">
            {shopUrl[collection] &&
              shopUrl[collection].map((type) => (
                <Link
                  key={type}
                  to={`/shop/${collection}/${type}`}
                  onClick={() => shopFetchStart(undefined, type)}
                >
                  {type}
                </Link>
              ))}
            <FilterBar
              filterPrice={["lower", "highter"]}
              title={"價格排序"}
              filterTitle={"Price"}
            />
          </div>
          <div className="collection-container">
            {collections.map((item) => (
              <ShopItem key={item.itemId} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopCollectionsSelect,
  isFetching: shopIsFetchingSelect,
  shopUrl: shopUrlSelect,
});
const mapDispatchToProps = (dispatch) => ({
  shopFetchStart: (url, typeUrl) => dispatch(shopFetchStart(url, typeUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopCollectionPage);
