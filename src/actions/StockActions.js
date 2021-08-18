import {
  SEARCH_STOCKS_BY_SYMBOL,
  SEARCH_STOCKS_BY_SYMBOL_SUCCESS,
  SEARCH_STOCKS_BY_SYMBOL_ERROR
} from "./ActionTypes";

export function searchStocksBySymbol() {
  return {
    type: SEARCH_STOCKS_BY_SYMBOL
  };
}

export function searchStocksBySymbolSuccess(stocks) {
  return {
    type: SEARCH_STOCKS_BY_SYMBOL_SUCCESS,
    stocks
  };
}

export function searchStocksBySymbolError(error) {
  return {
    type: SEARCH_STOCKS_BY_SYMBOL_ERROR,
    payload: { error }
  };
}
