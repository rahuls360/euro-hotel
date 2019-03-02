import React from "react";

class Restaurant extends React.Component {
  render() {
    if (this.props.restaurantDetails) {
      let {
        City,
        Cuisine,
        Name,
        Ranking,
        Rating,
        ReviewsNo
      } = this.props.restaurantDetails;
      return <h1>{City}</h1>;
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default Restaurant;
