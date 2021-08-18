import "./styles.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStockBySymbolAPI } from "../../actions/fetchData";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router-dom";

function StockDetail({ match, getStockBySymbolAPI, history, stock, loading }) {
  useEffect(() => {
    if (match.params.symbol) {
      getStockBySymbolAPI(match.params.symbol);
    } else {
      history.push("/");
    }
  }, []);

  return (
    <div className="stock-detail">
      {stock && stock.Name ? (
        <div>
          <div className="stock-header">
            <h2 className="page-title">{stock.Name}</h2>
            <div className="stock-item">
              <span className="label">{stock.Exchange}: </span>
              <span className="text bold">{stock.Symbol}</span>
            </div>
          </div>
          <div class="stock-content">
            <div className="stock-item">
              <h3 className="title">Description</h3>
              <span className="text">{stock.Description}</span>
            </div>
          </div>
          <div class="stock-content">
            <span className="stock-item grid6">
              <h3 className="title">Price</h3>
              <span className="text">
                <span className="price">{stock.AnalystTargetPrice}</span>{" "}
                {stock.Currency}
              </span>
            </span>
            <span className="stock-item grid6">
              <h3 className="title">52 Weeks Range</h3>
              <span className="text">
                {`${stock["52WeekLow"]} - ${stock["52WeekHigh"]}`}
              </span>
            </span>
          </div>
          <div class="stock-content">
            <div className="stock-item grid6">
              <h3 className="title">Price/ Earning Ratio</h3>
              <span className="text">{stock.PERatio}</span>
            </div>

            <div className="stock-item grid6">
              <h3 className="title">Market Cap</h3>
              <span className="text">
                {stock.MarketCapitalization.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"
                })}
              </span>
            </div>
          </div>
          <div class="stock-content">
            <div className="stock-item">
              <h3 className="title">Industry</h3>
              <span className="text">{stock.Industry}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="page-default">
          {loading ? (
            <CircularProgress className="loader" />
          ) : (
            <h2>Stock not Found!</h2>
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  stock: state.stocks.stock,
  loading: state.stocks.loading
});

const mapDispatchToProps = (dispatch) => ({
  getStockBySymbolAPI: (payload) => dispatch(getStockBySymbolAPI(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StockDetail));
