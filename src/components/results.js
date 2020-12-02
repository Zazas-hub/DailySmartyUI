import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import * as actions from "../actions";
import { connect } from "react-redux";
import ResultsPosts from "./resultsPosts";

class Results extends Component {
  handleSearchBarSubmit(query) {
    this.props.fetchQueryPosts(query);
  }
  render() {
    return (
      <div className="results">
        <Logo size={55} />
        <SearchBar
          page="results"
          onSubmit={(query) => this.handleSearchBarSubmit(query)}
        />
        <ResultsPosts />
      </div>
    );
  }
}
export default connect(null, actions)(Results);
