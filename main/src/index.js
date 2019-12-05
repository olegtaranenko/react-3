import React                     from "react";
import ReactDOM                  from "react-dom";
import {Provider}                from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import App                from "./components/App";
import ErrorBoundary      from "./components/error-boundary";
import ShopServiceContext from "./components/shop-service-context";
import ShopService        from "./services/shop-service";
import store              from './store'

const shopService = new ShopService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ShopServiceContext.Provider value={shopService}>
        <Router>
          <App/>
        </Router>
      </ShopServiceContext.Provider>
    </ErrorBoundary>
  </Provider>
  , document.getElementById('root')
);
