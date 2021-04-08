import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";

class EmpContainer extends Component {
  state= {
    results: undefined,
    search: ""
  };

  // searchEmployee = () => {
  //   API.random.random()
  //     .then(res => this.setState({ results: res.results}))
  //     .catch(err => console.log("----", err));
  // }

  componentDidMount() {
    API()
      .then(res => this.setState({ results: res.data.results}))
      .catch(err => console.log("----", err));
  }

  render() {
    return (
      <>
        <h1>EmpContainer</h1>
        {this.state.results !== undefined ? (
          <h2>{this.state.results[0].name.first}</h2>
        ) : (
          <>
          </>
        )}
      </>
    )
  }
}

export default EmpContainer;