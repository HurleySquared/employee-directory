import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import List from "./List";

class EmpContainer extends Component {
  state = {
    results: [],
    search: "",
    filtered: [],
    sortedRes: [],
    order: false
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

  sortedEmp = () => {
    const sorted = this.state.results;
    let up = 1;
    let down = -1;
    if (!this.state.order) {
      up = 1;
      down = -1
    } else {
      up = 1;
      down = -1;
    }
    
    
    let sortedRes = sorted.sort((a, b) => {
      if (a.sorted.name < b.sorted.name) {
        return down;
      }
      if (a.sorted.name > b.sorted.name) {
        return up;
      }
      return 0;
    })
    
    this.setState({
      sortEmp: sortedRes,
      order: !this.state.order
    })
    console.log(sortedRes);
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
          onClick={this.sortedEmp}
          />
          ) : (
            <List
            results={this.state.results}
            handleInputChange={this.handleInputChange}
            onClick={this.sortedEmp}
          />
        )}
      </>
    )
  }
}

export default EmpContainer;