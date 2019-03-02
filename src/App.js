import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Restaurant from "./components/Restaurant";
import Pagination from "react-js-pagination";

if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

class App extends Component {
  state = {
    data: {},
    activePage: 1,
    search: "",
    name: []
  };

  componentWillMount() {
    var csvFilePath = require("./data.csv");
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    });
  }

  updateData = result => {
    const data = result.data;
    this.setState({ data: data });
    console.log(data);
  };

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };

  searchHandler = event => {
    this.setState({ search: event.target.value });
    // this.state.data.filter(restaurant => {
    //   return restaurant.Name.indexOf(this.state.search) !== -1;
    // });
  };

  render() {
    let result = [];
    let filteredRestaurant;
    const n = 10; //number of restaurants/page
    for (
      let i = (this.state.activePage - 1) * n;
      i <= n * this.state.activePage - 1;
      i++
    ) {
      filteredRestaurant = this.state.data[i];
      if (filteredRestaurant !== undefined) {
        // console.log(Object.keys(filteredRestaurant.Name));
        // filteredRestaurant = this.state.data[i].Name.filter(restaurant => {
        //   return restaurant.Name.indexOf(this.state.search) !== -1;
        // });
      }
      result.push(
        <Restaurant restaurantDetails={filteredRestaurant} key={i} index={i} />
      );
    }
    return (
      <div className="App">
        <h3>Europian Restaurant</h3>
        <form method="get" id="search">
          <input
            type="text"
            name="search"
            placeholder="Search (by name or cuisine)"
            className="form-control"
            value={this.state.search}
            onChange={this.searchHandler}
          />
        </form>

        <section id="restaurant">
          <div className="container-fluid">
            <div className="row">{result}</div>
          </div>
        </section>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={n}
          totalItemsCount={this.state.data.length / n}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default App;
