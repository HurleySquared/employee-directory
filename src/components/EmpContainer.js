import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import List from "./List";

class EmpContainer extends Component {
  state = {
    results: [],
    search: "",
    filtered: []
  };

  componentDidMount() {
    API()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = (e) => {
    e.preventDefault();

    const filterRes = this.state.results.filter(info => {
      const newArr = [info.name.first, info.name.last]
      return newArr.some(info => info.includes(e.target.value))
    })

    this.setState({
      filtered: filterRes,
      search: e.target.value
    })
    console.log(filterRes)
  };

  render() {
    return (
      <>
        <SearchForm
          results={this.state.results}
          search={this.state.search}
          handleInputChange={this.handleInputChange} 
        />
        {this.state.filtered.length ? (
          <List 
          results={this.state.filtered}
          handleInputChange={this.handleInputChange}
          />
          ) : (
            <List
            results={this.state.results}
            handleInputChange={this.handleInputChange}
          />
        )}
      </>
    )
  }
}

export default EmpContainer;