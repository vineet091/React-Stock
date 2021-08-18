import React, { PureComponent } from "react";
import { Router, Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import history from "./history";
import StockDetailPage from "./views/StockDetailsPage/StockDetailsPage";
export default class App extends PureComponent {
  render() {
    return (
      <div className="app-wrapper">
        {/* <Loader />
        <Message /> */}
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/stock/:symbol" component={StockDetailPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
