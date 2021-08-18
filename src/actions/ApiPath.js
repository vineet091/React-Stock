const BASE_URL = "https://www.alphavantage.co/query";

export const GET_STOCK_BY_SYMBOL_URL = `${BASE_URL}/?function=OVERVIEW&apikey=Q3EX61EMM3NNQ6SX&symbol={symbol}`;
export const GET_STOCK_SEARCH_URL = `${BASE_URL}?function=SYMBOL_SEARCH&apikey=Q3EX61EMM3NNQ6SX&keywords={keyword}`;
