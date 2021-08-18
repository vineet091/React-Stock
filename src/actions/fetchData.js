import axios from "axios";
import {
  getStocks,
  getStocksSuccess,
  getStocksError,
  getStockBySymbol,
  getStockBySymbolSuccess,
  getStockBySymbolError
} from "./StockActions";
import { GET_STOCK_BY_SYMBOL_URL, GET_STOCK_SEARCH_URL } from "./ApiPath";

export const getStocksAPI = (searchText) => {
  return (dispatch) => {
    dispatch(getStocks());
    const url = GET_STOCK_SEARCH_URL.replace("{keyword}", searchText);
    try {
      axios
        .get(url)
        .then((response) => {
          dispatch(getStocksSuccess(response.data));
        })
        .catch((error) => {
          dispatch(getStocksError(error));
        });
    } catch (error) {
      dispatch(getStocksError(error));
    }
  };
};

export const getStockBySymbolAPI = (symbol) => {
  return (dispatch) => {
    dispatch(getStockBySymbol());
    const url = GET_STOCK_BY_SYMBOL_URL.replace("{symbol}", symbol);
    try {
      axios
        .get(url)
        .then((response) => {
          dispatch(getStockBySymbolSuccess(response.data));
        })
        .catch((error) => {
          dispatch(getStockBySymbolError(error));
        });
    } catch (error) {
      dispatch(getStocksError(error));
    }
  };
};
