let initialState = {
  stockList: [],
  stock: {},
  loading: false,
  error: ""
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "GET_STOCKS":
      return {
        ...state,
        loading: true,
        error: ""
      };
    case "GET_STOCKS_SUCCESS":
      var error = "";
      if (action.stocks && !action.stocks.bestMatches) {
        error = "Unable to fetch data!";
      }
      return {
        ...state,
        loading: false,
        error,
        stockList:
          action.stocks && action.stocks.bestMatches
            ? action.stocks.bestMatches
            : []
      };
    case "GET_STOCKS_ERROR":
      return {
        ...state,
        loading: false,
        error:
          action.error && action.error.message
            ? action.error.message
            : "Unable to fetch data!",
        stockList: [[]]
      };
    case "GET_STOCK_BY_SYMBOL":
      return {
        ...state,
        loading: true,
        error: ""
      };
    case "GET_STOCK_BY_SYMBOL_SUCCESS":
      return {
        ...state,
        loading: false,
        stock: action.stock
      };
    case "GET_STOCK_BY_SYMBOL_ERROR":
      return {
        ...state,
        loading: false,
        error:
          action.error && action.error.message
            ? action.error.message
            : "Unable to fetch data!",
        stock: {}
      };

    default:
      return state;
  }
}

export default reducer;
