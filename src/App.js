import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import NotFound from "./views/NotFound/NotFound";
// import history from "./history";
import StockDetailPage from "./views/StockDetailsPage/StockDetailsPage";
export default class App extends PureComponent {
  render() {
    return (
      <div className="app-wrapper">
        {/* <Loader />
        <Message /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/stock/:symbol" component={StockDetailPage} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
