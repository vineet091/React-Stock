import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fetchStocks } from "../../actions/fetchData";
import { useEffect } from "react";
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

class App extends React.Component {
  componentDidMount() {
    console.log(this.props.history);
    this.props.fetchStocks();
  }
  render() {
    return (
      <div className="App">
        <h2>Github Repo Search</h2>
        <div class="searchBox"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stocks: state.stocks
});

const mapDispatchToProps = (dispatch) => ({
  fetchStocks: (payload) => dispatch(fetchStocks(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
