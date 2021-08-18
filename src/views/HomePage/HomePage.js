import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { debounce } from "../../utils/utils";
import { getStocksAPI } from "../../actions/fetchData";
import "./styles.css";

function Home({ history, stockList, error, getStocksAPI, loading }) {
  const [searchText, setSearchText] = useState("");
  const [errorText, setErrorText] = useState("");
  const fetchData = (value) => {
    getStocksAPI(value);
  };
  useEffect(() => {
    this.debounceOnChange = debounce(fetchData, 700);
  }, []);

  const handleSearch = (value) => {
    if (value && value["1. symbol"]) {
      history.push(`/stock/${value["1. symbol"]}`);
    }
  };

  const validateSearch = () => {
    if (searchText) {
      history.push(`/stock/${searchText}`);
    } else {
      setErrorText("Mandatory fields cannot be empty.");
    }
  };

  return (
    <div className="home">
      <div className="home-wrapper">
        <h2 className="home-title">Stock Search</h2>
        <div class="search-box">
          <Autocomplete
            freeSolo
            loading={loading}
            disableClearable
            id="stock-search-input"
            classes={{
              inputRoot: "search-autocomplete",
              input: "search-input",
              root: "search-autocomplete-root"
            }}
            getOptionSelected={(option, value) =>
              option.name === value["2. name"]
            }
            onChange={(event, newValue) => {
              handleSearch(newValue);
            }}
            getOptionLabel={(option) => option["2. name"]}
            options={stockList || []}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={(ev) => {
                  // dont fire API if the user delete or not entered anything
                  if (ev.target.value !== "" || ev.target.value !== null) {
                    setSearchText(ev.target.value);
                    setErrorText("");
                    this.debounceOnChange(ev.target.value);
                  }
                }}
                variant="outlined"
                error={!!error || !!errorText}
                helperText={error || errorText}
              />
            )}
          />
          <button
            type="button"
            id="btn-search"
            class="btn-search"
            onClick={() => validateSearch()}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  stockList: state.stocks.stockList,
  error: state.stocks.error,
  loading: state.stocks.loading
});

const mapDispatchToProps = (dispatch) => ({
  getStocksAPI: (payload) => dispatch(getStocksAPI(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
