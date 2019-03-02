import React from "react";
import img from "../food.png";
import "font-awesome/css/font-awesome.min.css";

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
      return (
        <div className="col-md-6 well">
          <div className="row border-bottom">
            <div className="col-md-3">
              <img src={img} alt="food" className="img-responsive" />
            </div>
            <div className="col-md-8">
              <h3 className="title">{Name}</h3>
              <h5>{Cuisine}</h5>
              <h6>{City}</h6>
            </div>
            <div className="col-md-1">
              <p>
                <i className="fa fa-star" />
                {Rating}
              </p>
            </div>
          </div>
          <p>{ReviewsNo} reviews</p>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default Restaurant;
