import React from "react";
import { Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";

import "./App.scss";

// Pages----------
import Header from "./component/header/Header";
import ShopPage from "./pages/shop-page/ShopPage";
import ShopCollectionPage from "./pages/shop-overview-page/ShopCollectionPage";
import ShopItemPage from "./pages/shop-item-page/ShopItemPage";
// import { connect } from "react-redux";

const App = () => {
  return (
    <>
      <Header />
      <div className="space" />
      <main>
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/shop/:collection"
            component={ShopCollectionPage}
          />
          <Route path="/shop/:collection/:itemId" component={ShopItemPage} />
          {/*<Route exact path="/" component={HomePage} />*/}
        </Switch>
      </main>
    </>
  );
};

// const mapStateToProps = ({ shop: { shopItemDetail } }) => ({
//     shopItemDetail,
// });

export default App;
