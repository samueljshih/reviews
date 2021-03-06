import React from 'react';
import Reviews from './Reviews.jsx';
import axios from 'axios';

var fakeData = require('../../../database/fakeData/fakeRestaurants.js');

var restaurant = fakeData.oneRestaurant;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: restaurant
    };
  }

  componentDidMount() {
    var restaurant;
    axios
      .get('http://localhost:3002/restaurants/name')
      .then(data => {
        restaurant = data.data;
        this.setState({
          restaurant: restaurant
        });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  render() {
    return (
      <div>
        <h1 className="logo">Zagat</h1>
        <Reviews restaurant={this.state.restaurant} />
      </div>
    );
  }
}

export default App;
