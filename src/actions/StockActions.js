import {
  GET_STOCKS,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_ERROR,
  GET_STOCK_BY_SYMBOL,
  GET_STOCK_BY_SYMBOL_SUCCESS,
  GET_STOCK_BY_SYMBOL_ERROR
} from "./ActionTypes";

//Search Actions
export const getStocks = () => {
  return {
    type: GET_STOCKS
  };
};

export const getStocksSuccess = (stocks) => {
  return {
    type: GET_STOCKS_SUCCESS,
    stocks
  };
};

export const getStocksError = (error) => {
  return {
    type: GET_STOCKS_ERROR,
    error
  };
};

//Get Stock by symbol Actions
export const getStockBySymbol = () => {
  return {
    type: GET_STOCK_BY_SYMBOL
  };
};

export const getStockBySymbolSuccess = (stock) => {
  return {
    type: GET_STOCK_BY_SYMBOL_SUCCESS,
    stock
  };
};

export const getStockBySymbolError = (error) => {
  return {
    type: GET_STOCK_BY_SYMBOL_ERROR,
    error
  };
};
