import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./ShopCollectionPage.scss";

import LoadingSpinner from "../../component/loading-spinner/LoadingSpinner";
import ShopItem from "../../component/shop-item/ShopItem";
import {
  shopCollectionsSelect,
  shopIsFetchingSelect,
} from "../../redux/shop/shop-selector";
import { shopFetchStart } from "../../redux/shop/shop-action";

const ShopOverviewPage = ({
  match,
  collections,
  shopFetchStart,
  isFetching,
}) => {
  const {
    params: { collection },
  } = match;

  useEffect(() => {
    shopFetchStart(collection);
  }, [collection, shopFetchStart]);

  return (
    <div className="collection-page">
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="collection-title">{collection}</h1>
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
});
const mapDispatchToProps = (dispatch) => ({
  shopFetchStart: (url) => dispatch(shopFetchStart(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopOverviewPage);
