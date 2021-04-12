import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import List from "./List";

class EmpContainer extends Component {
  state = {
    results: [],
    search: ""
  };

  componentDidMount() {
    API()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log("----", err));
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
        <SearchForm
          results={this.search}
          search={this.state.search}
          handleInputChange={this.handleInputChange} />
        {this.state.results !== [] ? (
          <List results={this.state.results} />
        ) : (
          <>
          </>
        )}
      </>
    )
  }
}

export default EmpContainer;