import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Restaurant from "./components/Restaurant";

if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

class App extends Component {
  state = {
    data: {}
  };

  updateData = result => {
    const data = result.data;
    this.setState({ data: data });
    console.log(data);
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

  render() {
    return (
      <div className="App">
        <h3>Europian Restaurant</h3>
        <form method="get" id="search">
          <input
            type="text"
            name="search"
            placeholder="Search (by name or cuisine)"
            className="form-control"
          />
        </form>

        <section id="restaurant">
          <div className="container-fluid">
            <div className="row">
              {Object.keys(this.state.data).map(key => {
                return (
                  <Restaurant
                    restaurantDetails={this.state.data[key]}
                    key={key}
                    index={key}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
