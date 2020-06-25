import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";
// Pages----------
import Header from "./component/header/Header";
// import HomePage from './pages/HomePage/Home'
// Component------
import LoadingSpinner from "./component/loading-spinner/LoadingSpinner";

import ErrorBoundary from "./component/error-boundary/ErrorBoundary";
import CartList from "./component/Order-CartList/CartList";
import CheckOutPage from "./component/Order-CheckOutPage/CheckOutPage";
import OrderList from './component/OrderList/OrderList.js'
import OrderCompleted from "./component/OrderCompleted/OrderCompleted";
// react lazy
const ShopPage = lazy(() => import("./pages/shop-page/ShopPage"));
const ShopCollectionPage = lazy(() =>
  import("./pages/shop-collection-page/ShopCollectionPage")
);
const ShopItemPage = lazy(() => import("./pages/shop-item-page/ShopItemPage"));

// APP component
const App = () => {




  return (
    <div>
      <Header />
      {/* <HomePage /> */}

      <main>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>

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
              <Route path="/OrderCompleted" component={OrderCompleted} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </main>
    </div>
  );
};

export default connect(null)(App);
