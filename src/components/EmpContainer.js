import React, { Component } from "react";
import API from "../utils/API";
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

  render() {
    return (
      <div>
        {this.state.results !== [] ? (
          <List />
        ) : (
          <>
          </>
        )}
      </div>
    )
  }
}

export default EmpContainer;