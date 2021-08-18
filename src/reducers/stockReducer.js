let initialState = {
  stocks: [],
  loading: false,
  error: null
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "SEARCH_STOCKS_BY_SYMBOL":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "SEARCH_STOCKS_BY_SYMBOL_SUCCESS":
      return {
        ...state,
        loading: false,
        stocks: action.stocks
      };
    case "SEARCH_STOCKS_BY_SYMBOL_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        stocks: []
      };

    default:
      return state;
  }
}

export default reducer;
