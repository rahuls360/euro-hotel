import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

if (typeof window !== 'undefined') {
    window.jQuery = window.$ = require('jquery');
    require('bootstrap');
}

class App extends Component {
  
  updateData = (result) => {
    const data = result.data;
    console.log(data);
  }

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
        <input type="text" name="search" placeholder="Search (by name or cuisine)" class="form-control"/>
       </form>
       
      </div>
    );
  }
}

export default App;
