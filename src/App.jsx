import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

// Pages----------
import Header from "./component/header/Header";

// Component------
import LoadingSpinner from "./component/loading-spinner/LoadingSpinner";

import "./App.scss";
import ErrorBoundary from "./component/error-boundary/ErrorBoundary";

// react lazy
const ShopPage = lazy(() => import("./pages/shop-page/ShopPage"));
const ShopCollectionPage = lazy(() =>
  import("./pages/shop-overview-page/ShopCollectionPage")
);
const ShopItemPage = lazy(() => import("./pages/shop-item-page/ShopItemPage"));

// APP component
const App = () => {
  return (
    <>
      <Header />
      <div className="space" />
      <main>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Route exact path="/" component={LoadingSpinner} />
              <Route exact path="/shop" component={ShopPage} />
              <Route
                exact
                path="/shop/:collection"
                component={ShopCollectionPage}
              />
              <Route
                path="/shop/:collection/:itemId"
                component={ShopItemPage}
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </main>
    </>
  );
};

export default App;
