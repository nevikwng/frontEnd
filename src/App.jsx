import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Pages----------
import Header from "./component/header/Header";

// Component------
import LoadingSpinner from "./component/loading-spinner/LoadingSpinner";

import "./App.scss";
import ErrorBoundary from "./component/error-boundary/ErrorBoundary";
import CartList from "./component/Order-CartList/CartList";
import CheckOutPage from "./component/Order-CheckOutPage/CheckOutPage";
import OrderList from './component/OrderList/OrderList.js'

// react lazy
const ShopPage = lazy(() => import("./pages/shop-page/ShopPage"));
const ShopCollectionPage = lazy(() =>
  import("./pages/shop-collection-page/ShopCollectionPage")
);
const ShopItemPage = lazy(() => import("./pages/shop-item-page/ShopItemPage"));

const HomePage = () => <div>Hi</div>;
// APP component
const App = () => {
  return (
    <div>
      <Header />
      <div className="space" />
      <main>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Route exact path="/" component={HomePage} />

              <Route exact path="/shopping" component={ShopPage} />

              <Route
                exact
                path="/shop/:collection?/:itemType?"
                component={ShopCollectionPage}
              />
              <Route
                path="/shopitem/:collection/:itemId"
                component={ShopItemPage}
              />
              <Route path="/CartList" component={CartList} />
              <Route path="/OrderList" component={OrderList} />

              <Route path="/CheckOutPage" component={CheckOutPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </main>
    </div>
  );
};

export default connect(null)(App);
